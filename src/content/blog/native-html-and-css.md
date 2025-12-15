---
title: "Why Don’t We Use Native HTML and CSS Anymore?"
date: "2025-12-15"
description: "In this issue, I explore why developers don't use native HTML and CSS anymore. Why do developers always reach for frameworks like React or Angular nowadays."
tags: ["blog", "frameworks","native","HTML", "software-engineering"]
author: "Matt Hoy"
---

# Why Don’t We Use Native HTML and CSS Anymore?

When was the last time you used **native HTML and CSS**?

I’m not talking about dropping a `<p>` tag inside a React component and calling it a day. I mean *actually* writing plain HTML and CSS—no framework, no abstraction layer, no build step.

When was the last time you didn’t reach for a framework?

When was the last time you didn’t use Tailwind?

Or a pre-styled, pre-rolled React component library?

At some point, we stopped asking *whether* we needed all this tooling and started assuming we did. So why did we move away from **plain HTML, CSS, and JavaScript** in the first place?

## The History of the Three

The three. The holy trinity. **HTML**, **CSS**, and **JS**. Together, they form the foundation of the web.

- **HTML** → structure and meaning
- **CSS** → how it should look
- **JS** → interactivity and logic

These three technologies are what everything comes down to. So why, then, do we not use them directly anymore? To answer this, we need to remember the limitations of these technologies, which gave birth to the frameworks we use today.

### HTML: Structure Overload

HTML can quickly get out of control. Just take a look at the source of any modern web page. You’ll likely be buried in endless `<div>` tags. But is this a symptom of using a framework? Not necessarily. Since **July 2015**, the [*`nav` element*](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav) was widely adopted by browsers, and since then, other elements have been added that have improved structure and readability. This shift toward semantic HTML has helped, but the markup can still become overwhelming.

### CSS: A Beautiful, Confusing Beast

CSS... where do I even begin? From the headache I get when I see `!important` littered in stylesheets to the responsive design guru who dies a silent death when they see `px` instead of `rem`. CSS is powerful, but it’s hard to get right. You were lucky if anyone commented on a CSS stylesheet, which made working with and understanding CSS written by others incredibly difficult.

In the end, I think most developers wanted to leave CSS to someone else—someone who knew what they were doing. Enter [*Tailwind*](https://tailwindcss.com/), a utility-first CSS framework that made life easier by giving developers pre-built, flexible, and responsive design utilities.

### JS: The Long, Bloody History

JS has had its own long, bloody history, sparking the browser wars when [Microsoft reverse-engineered](https://www.historytools.org/software/javascript-guide) the original version for their browser. JS also suffered from ambiguity, with issues like loose equality (`==` vs `===`) and type coercion (`1 + '1' = '11'`). While it has roots in functional programming, the rest of the industry leaned toward object-oriented programming, creating a disconnect between front-end and back-end development.

### The Higher-Level Programming Disconnect

In general programming, we have higher-level languages that are much more human-readable. **HTML** isn't like machine code or C—it’s designed to be simple and expressive. So why do we need something like React? Given all the recent [vulnerabilities and exploits](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components) that have made the news, I’ve asked myself: Why do I use React again? What problem does it really solve?

## What common problems do frameworks solve?

React is a library for building user intrerfaces that are for a single-page application (SPA). SPA's are apps that load one page with all HTML, CSS, JS required for the entire app, there are genrally no page loads as the user interacts with it. Making it feel like a desktop application. Think Facebook or Instagram. A feed, you are scrolling through a page, and rarely leaving it but its changing and responsding dynamically.

Tailwind was made to make working with CSS easier. It provides low level utility classes like `p-4` instead of `padding: 1rem;`. It removes CSS bloat by checking for unused CSS and removing them in production.

Node.js allows JS to be run on the server. Allowing JS to be used in the front end and the backend. It uses an event driven model allowing for efficient handling of 1000's of concurrent connections making it ideal for apps that require real time data. 

## How Far Have HTML, CSS, and JS Come?

Almost every pitfall I mentioned in the history of these technologies has now been addressed. Over time, thanks to **frameworks**, these technologies have caught up and eventually adopted many of the styles and paradigms we once only dreamed of.

- **JS** now has classes
- **CSS** has variables
- **HTML** has elements designed for specific, common use cases

We owe a lot to these frameworks. They served as testing grounds for these capabilities and acted as a kind of *voting system*. The more popular a framework became, the higher the chance its features and paradigms would be adopted by the broader web development community.

Frameworks have played a crucial role in shaping how we develop software. And, let’s face it—they’ve certainly made the development process faster and easier.

## Is It Time to Go Back to Basics?

I’m not suggesting that we should abandon frameworks like **React** altogether. However, I do think it’s important to ask ourselves *why* we need these tools and to ensure we use them for their intended purposes. A framework solves a specific problem—that’s why it exists. Make sure you’re using the right framework for the right problem. 

The fact that we now have technologies like [React Router](https://reactrouter.com/) should be a warning sign.

### React Vulnerabilities

As of **December 15, 2025**, at least five distinct vulnerabilities have been identified in **React** and its related components within the last six months. The most critical of these is the **React2Shell vulnerability (CVE-2025-55182)**, which allows for remote code execution and has been actively exploited.

Make sure the risk is worth the reward. If you’re using React for something like a simple static website (like this blog), ask yourself: *Why?* 

Is it even possible to build a website with just raw **HTML**, **CSS**, and **JS** anymore? Of course, it is—that’s exactly what these frameworks ultimately compile down to. 

Is it easy? Well, I’m about to find out. As I try to redo this blog in the basic building blocks of the web.

Feel free to reach out to me on [GitHub](https://github.com/ezybakeoven) or connect with me on LinkedIn. I'm always open to discussions about technology, software engineering, or just saying hello!

---


