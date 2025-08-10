---
title: "Using an LLM to alter Redux State slices"
date: "2025-08-26"
description: "How I built a Next.js app that uses AI to dynamically update Redux state through MCP servers, creating a seamless AI-powered user interface."
tags: ["AI", "Next.js", "Redux", "MCP", "technical", "architecture", "UI"]
author: "Matt Hoy"
---

# Using an LLM to alter Redux State slices 

After building several AI tools, I wanted to create something that felt truly integrated—not just a chat interface bolted onto existing functionality, but AI that could directly manipulate the application state. Here's how I built a Next.js app where an LLM can dynamically update the UI by modifying Redux slices through MCP servers.

## The Architecture Overview

The system consists of four main components:

1. **Next.js Frontend** - React components that read from Redux state
2. **Redux Store** - Single source of truth for application state
3. **AI Agent** - LLM that reads current state and generates updates
4. **MCP Servers** - Model Context Protocol servers that handle state mutations

The flow works like this: User makes a request → AI reads current Redux slice → AI calls appropriate MCP server functions that alter the state → MCP server returns updated slice → Frontend automatically refreshes with new state.

## Why This Architecture?

Redux is the source of truth, it's JSON. AI can make changes to JSON. It's also a nice way to have changes made to the frontend without needing a page refresh, so that changes can be fast and seamless. The Redux slices also make it a nice way to limit the context being passed to the LLM so it works particularly well.

By making Redux the single source of truth and giving the AI direct (but controlled) access to modify state, the AI becomes a first-class citizen in the application architecture. The UI updates feel instant and natural because they're using the same state management patterns as any other user interaction.

## Redux as the Interface Layer

Each page in the application has its own Redux slice that represents all the data needed to render that page. For example, a product management page might have:

```javascript
const productPageSlice = createSlice({
  name: 'productPage',
  initialState: {
    products: [],
    filters: {
      category: '',
      status: 'all',
      searchQuery: ''
    },
    selectedProducts: [],
    loading: false,
    highlightedItems: []
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    updateFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setHighlightedItems: (state, action) => {
      state.highlightedItems = action.payload;
    }
    // ... other reducers
  }
});
```

The key insight is that this slice represents everything the AI needs to know about the current page state, and everything it can modify to change what the user sees.

## MCP Servers for State Management

I created separate MCP servers for each major functionality area. Each server exposes tools that can read and modify specific Redux slices. Here's a simplified example of a product management MCP server:

```python
from mcp import Server
import json

server = Server("product-management")

@server.tool("get_product_page_state")
def get_product_page_state() -> str:
    """Get the current Redux state for the product page"""
    # In reality, this would connect to your state store
    current_state = get_current_redux_slice("productPage")
    return json.dumps(current_state)

@server.tool("update_product_filters")
def update_product_filters(filters: dict) -> str:
    """Update the product filter state"""
    current_state = get_current_redux_slice("productPage")
    current_state["filters"].update(filters)
    
    # Validate and sanitize the update
    validated_state = validate_product_page_state(current_state)
    
    return json.dumps(validated_state)

@server.tool("highlight_products")
def highlight_products(product_ids: list) -> str:
    """Highlight specific products in the UI"""
    current_state = get_current_redux_slice("productPage")
    current_state["highlightedItems"] = product_ids
    
    return json.dumps(current_state)
```

The MCP servers act as a controlled interface between the AI and your application state. They can validate inputs, enforce business rules, and ensure that state updates are safe and consistent.

## AI Agent Implementation

The AI agent receives the current page state and user requests, then uses the appropriate MCP tools to generate state updates. Here's the general flow:

```python
async def handle_user_request(request: str, current_page: str):
    # Get current state
    current_state = await mcp_client.call_tool(
        f"get_{current_page}_state"
    )
    
    # Create prompt with context
    prompt = f"""
    Current page state: {current_state}
    User request: {request}
    
    Based on the user request, determine what changes need to be made to the 
    page state. Use the available tools to make these changes and return 
    the updated state.
    """
    
    # Let AI choose and execute tools
    response = await ai_client.chat_with_tools(
        prompt=prompt,
        tools=get_tools_for_page(current_page)
    )
    
    return response
```

The AI can see exactly what's currently displayed to the user and has precise tools to modify specific aspects of that state.

## Frontend Integration

On the frontend, the integration is surprisingly simple. Components just read from Redux like normal:

```jsx
function ProductPage() {
  const { products, filters, highlightedItems } = useSelector(
    state => state.productPage
  );
  
  return (
    <div>
      <ProductFilters filters={filters} />
      <ProductList 
        products={products}
        highlighted={highlightedItems}
      />
      <AIAssistant onRequest={handleAIRequest} />
    </div>
  );
}

async function handleAIRequest(request) {
  const response = await fetch('/api/ai-request', {
    method: 'POST',
    body: JSON.stringify({ request, page: 'products' })
  });
  
  const { updatedState } = await response.json();
  
  // Dispatch the entire updated slice
  dispatch(setProductPageState(updatedState));
}
```

When the AI returns an updated state, we just dispatch it to Redux and the entire UI updates automatically. No manual DOM manipulation, no complex state reconciliation—just normal React/Redux patterns.

## Real-World Example

Here's how this plays out in practice. A user might say: "Show me all inactive products in the Electronics category that haven't been updated in the last 30 days."

The AI:
1. Reads the current product page state
2. Calls `update_product_filters` with the appropriate filter criteria
3. Calls `highlight_products` to emphasize the matching items
4. Returns the updated state

The user sees the filters update, the product list refresh, and the matching items highlighted—all in a single, smooth interaction.

## Key Benefits

### 1. Consistent State Management
Since everything goes through Redux, there's no risk of the AI and the regular UI getting out of sync. The AI is just another way to dispatch actions.

### 2. Predictable Updates
Each MCP server tool returns a complete, valid state slice. The frontend doesn't need to worry about partial updates or merging AI responses with existing state.

### 3. Easy Debugging
You can see exactly what the AI changed by comparing Redux states before and after. The Redux DevTools show every AI-triggered state change just like any other action.

### 4. Flexible UI Updates
Instead of the AI generating new HTML or trying to describe changes, it directly manipulates the data that drives the UI. This means the same AI request can work across different page layouts or component structures.

## Challenges and Solutions

### State Validation
MCP servers need robust validation to ensure AI-generated state updates don't break the application. I validate both the structure and business logic of state changes.

### Tool Scope
It's tempting to give the AI very granular tools, but I found broader tools that update logical chunks of state work better. Instead of "addProduct" and "removeProduct", I use "updateProductList" that can handle multiple changes atomically.

### Error Recovery
When the AI makes an invalid state update, the MCP server returns an error message and the current (unchanged) state. The frontend can then show the error and maintain its current view.

## Performance Considerations

The architecture performs well because:
- State updates are atomic and predictable
- The frontend only re-renders components affected by state changes
- MCP servers can implement caching and optimization logic
- AI requests are async and don't block the UI

### Token Cost Optimization

One critical consideration I discovered early was token usage. Since LLMs charge per token, and the AI needs to process the entire Redux slice on every request, slice size directly impacts costs.

I made several optimizations:

**Limited UI Scope**: I restricted product lists to 10 items at a time with pagination. This keeps the state slice manageable while still providing enough context for the AI to make intelligent decisions.

**Lean State Structure**: I was extremely conscious about what data to include in Redux slices. Only essential UI state goes into the slice that the AI sees—detailed product information, metadata, and computed values are kept separate and loaded on-demand.

**State Pruning**: Before sending state to the AI, I strip out any fields that aren't relevant to the current operation. For example, if the user is just updating filters, I don't need to send the full product details.

```javascript
// Full Redux state (not sent to AI)
const fullProductState = {
  products: [...], // Full product objects with all fields
  metadata: {...}, // Caching info, timestamps, etc.
  ui: {...}       // Scroll positions, form state, etc.
};

// Pruned state sent to AI
const aiOptimizedState = {
  products: products.map(p => ({
    id: p.id,
    name: p.name,
    status: p.status,
    category: p.category
  })).slice(0, 10), // Only first 10 items, essential fields only
  filters: filters,
  selectedProducts: selectedProducts
};
```

This approach reduced my average token usage by about 70% while maintaining full AI functionality.

## What's Next?

This pattern has opened up new possibilities for AI integration. I'm exploring:
- Multi-step AI workflows that coordinate across multiple MCP servers
- AI-generated temporary UI states for preview/confirmation flows
- Real-time collaborative editing where AI suggestions appear as state changes

The key insight is treating AI as a state management actor rather than a separate system. When AI can directly participate in your application's data flow, it stops feeling like a bolt-on feature and starts feeling like a native part of the user experience.

---

*Want to see the full implementation? The complete code examples and MCP server implementations are available on my [GitHub](https://github.com/ezybakeoven). Let me know if you try this pattern in your own projects!*
