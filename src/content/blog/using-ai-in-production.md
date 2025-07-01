---
title: "Deploying AI in Production: Best Practices and Lessons Learned"
date: "2025-07-01"
description: "A guide on how to develop AI tools which actually provide value and go beyond the hype."
tags: ["production", "guide", "blog", "AI", "ai-development"]
author: "Matt Hoy"
---

# Deploying AI in Production: Best Practices and Lessons Learned

In this post, I’ll share how I successfully deployed AI in a production environment and, more importantly, how it delivered real return on investment.

While there’s plenty of excitement around AI—especially using it in raw forms like prompting tools or platforms like Cursor—what’s often missing is a practical path to value. My goal here is to walk through how to design and implement an AI solution that’s tailored to your company or project, moving beyond the hype to something that actually works and makes a difference.

## Going Beyond the Hype

Everyone’s talking about AI, but few have managed to get a real return on investment from it. One of the most interesting things I’ve noticed is how some people view AI almost like a god—something all-powerful and all-knowing that can magically solve their problems. Honestly, I can’t blame them. I want that too.

But what I’ve found is that the true power of Generative AI isn’t magic—it’s flexibility as a user interface. The biggest ROI we’ve seen is in using it to give non-technical people access to technical tools, without training. Why? Because they don’t need to learn anything new. They can simply do what they already know how to do: ask someone (or something) else to do it.

At my current workplace, we’ve always struggled with caching—specifically, clearing the cache after changes. Over time, layers of caching have been added to improve performance, but with that came complexity. As we say on my team, there are “100 layers of cache.” Clearing the right one isn’t rocket science—it just takes an engineer about five minutes to figure it out. The real issue is the delay: the person who needs the cache cleared might wait up to an hour for an engineer to respond in Slack.

Yes, we have automatic cache clearing in place, and in theory it should handle this. And sure, one could argue this problem shouldn’t even exist. But it does. And because it only takes a few minutes to fix manually, no one has prioritized solving it properly.

This is a common pattern everywhere: “Why automate something that only takes five minutes?”
Because it’s been happening for years.

We were getting about five cache-clear requests per week. That’s potentially five hours of waiting time for others and around 25 minutes of engineering time lost each week—just for cache clearing.

Eventually, I got sick of the interruptions and said, “You know what? Let’s see if AI can handle this.”

## The Solution

I started researching how to build practical tools using AI. Like many, I fell into the usual “hello world” rabbit hole—basic tutorials with a chat interface where you can talk to an LLM, but can’t actually do anything beyond having a conversation. It felt disconnected from real problem-solving.

Then lightning struck: we already use Slack—a chat interface. Our users were already posting requests in a support channel. All I had to do was put the LLM in that same channel.

So, I got to work building a Slack app using Bolt. The app forwarded messages from Slack to an LLM (ChatGPT, in this case). At the time, OpenAI had released Assistants—custom instances of ChatGPT that could call functions. Simple, effective, and exactly what I needed.

I started writing functions to clear the cache. The assistant would call these functions when prompted. I did what engineers do: broke down the problem and wrote the code. The difference? Now an LLM could call that code instead of me.

And it worked. Instead of pinging me, users started asking the Slack bot to clear the cache. That alone was a win.

But then something unexpected happened.

Cache-clearing requests exploded—from 5 a week to over 50. And they weren’t just asking for single URLs anymore; people started pasting in batches of up to 50 at a time. That’s when my team realized the cache-clearing problem was much bigger than we thought.

Here’s what we learned:

- **Users were requesting support as a last resort** - Many were hesitant to message engineers, either out of fear or not wanting to seem incapable.
- **No one trusted the caching tools we had** - If something works 80% of the time, it’s not reliable enough to depend on.
- **Changes effected many pages not just single pages** - Our tools were built with the assumption of single-page changes, but users needed broader support.

## Postmortem

A colleague of mine pointed out that we didn’t necessarily need AI to solve this problem—and they were right. We already had a button on the page for clearing the cache. But as it turned out, users were wasting a lot of time manually clearing the cache for each individual page when working through a list of URLs.

This experience actually highlighted one of Generative AI’s biggest strengths: **bridging the gap between technical tools and non-technical users**. Our internal users weren’t technically savvy enough to craft a REST API call, but they had no problem pasting a URL into a Slack channel.

It also gave them a more flexible and loosely coupled UI. If we had built another button to clear the cache for a single URL, it would have still required changes to the interface. But with a chat-based UI, users can simply ask to clear the cache for as many URLs as they want, without needing any new buttons or frontend changes.

## Conclusion

Don’t wait around for AGI, and don’t try to throw overly complex problems at AI right away. The fastest way to deliver value today is by using AI to give non-technical users access to technical tools—especially within an organization. That alone can lead to massive productivity gains.

This experience opened up a whole new set of opportunities. I’m now working on a network of specialized assistants and internal tools, each focused on solving specific problems with the same principle: make powerful tools accessible through natural language.

---

Stay tuned—this is just the beginning. 🚀 

