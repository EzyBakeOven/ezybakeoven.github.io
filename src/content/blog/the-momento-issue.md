---
title: "Don't Believe Your Lies: The AI Memory Problem"
date: "2025-08-21"
description: "Using AI in your engineering workflow is very tricky, in this post I explore the allure of the fast gains vs the longterm pains when your knowledge and skill of engineering deteriorates over time, as reliance on AI becomes more prevalent."
tags: ["blog", "ai", "software-engineering"]
author: "Matt Hoy"
---

# Don't Believe Your Lies: The AI Memory Problem

For the past few years I have been using AI in my everyday workflow at work for Engineering. It's been a wild ride and I have had the privilege to enjoy using the tools as they came out. From just copy and pasting code from ChatGPT, and Claude. To using Cursor IDE and then Claude Code. Throughout this process I have been amazed and then soon after kept asking myself the same question. What did it do again?

That familiar lie: "I'll just get AI to handle this quickly—no harm done." An hour of mindless accept, accept, accept later ("Oh, you're absolutely right!"), it's still not working. You spend the next hour deleting everything and asking yourself why you even bothered. Worse yet is when it nails it on the first prompt. You hit the review step and rationalize: "I could read through all this, but it worked on my machine. I'm sure it's fine." LGTM. Approve. Merge to main. Whatever magic happened in that code, whatever edge cases it handled or missed. You learned nothing from it.

When things go south in production, you're thrust into your own personal Memento nightmare. All you have are cryptic notes left by an AI you barely remember trusting. Comments like "// Fixed edge case handling" and "// Optimized for performance" scattered throughout code that might as well be written in a foreign language. You stare at functions you've never seen before, trying to piece together the logic like Leonard piecing together Polaroids. Was this variable renamed for a reason? Why does this error handling look so convoluted? The git blame points to your name, but you have no memory of writing any of it. The AI left you breadcrumbs, but they lead nowhere useful. "Refactored based on best practices". Which best practices? Whose best practices? The AI's? And here you are, a detective in your own codebase, trying to solve a mystery where you're both the victim and the perpetrator. The AI played the role of Teddy—helpful in the moment, but ultimately leaving you more confused than when you started.

You don't trust your own code anymore. How can you? You didn't write it. You just approved it.

## The Memento Issue 

There was a [study](https://www.media.mit.edu/publications/your-brain-on-chatgpt/) where people wrote essays using ChatGPT and then asked 5 minutes later what the essay was about and they forgot. I found I had the same issue when using AI to help me write code. It's far too easy to fall into the mindless trance of accept, accept. Or just let it run wild! Everyone always justifies this with, you check the code in a review right? Kind of. If I really spent the time actually reviewing and understanding what code was generated then I might as well have just written it myself. It would take just as long. Not only that but it's the part of the job I think most engineers dislike, reviewing each other's code. The type of review is different as well. When you review a colleague's code you know their work. You generally know or trust they know what they are doing based on their past work, and you apply that level of detail accordingly. When you are reviewing AI's code, you need to go through it with a fine comb because ultimately you are liable for it.

My engineering manager wants me to let it cook, constantly asking me to make an agent of myself that can do my easy tasks for me. I can see the business case for this, it might even save time if I don't review the code. The problem with that is, I save the easy tasks for the days I am feeling off. I am human, I am not 100% all the time, and everyone has an off day. On an off day I work on small easy tasks. This builds confidence and knowledge over time, kind of like stretching stops an athlete from injury. They want me to only work on complex tasks, but would that see a productivity gain if I can't solve complex tasks every single day? Also when do I get to stretch?

Here lies the biggest issue with AI assisted or AI generated code. You either surrender to the madness and let it cook. Or you spend the time writing it yourself. Some people have said to use it to ask questions and to help you navigate the codebase, but is that worth $150 a month? Navigating a code base is a skill in itself after all, and when you let AI do it, those skills begin to turn into dust. I also doubt many engineers have the discipline to stop at asking questions when the answer is usually followed up with, "Did you want me to implement that for you?".

## Farming off knowledge

I am a mountain of paint. Everyday I pour a layer of paint, at the end of the day it dries. Overtime those layers have built up into a mountain. The problem with letting AI do it is that you are not sharpening your skills, you are not pouring the paint. 

I can review AI code now because I have spent nearly 10 years writing code without AI. But what happens in 5 years time? When a new tech stack comes out and AI does it and I don't. Will humans still be trusted to review AI's code? Or even in the nearer term when software is updated with new features. When do I learn those new features? Do you learn by reading a review or documentation? No. You learn through doing, you learn through experience. What experience do you gain from a prompt? What experience do you gain from talking about doing work instead of doing it?

When you feel you have mastery over easy small tasks, and you think "I can get AI to do this now". Really ask yourself, have you? If you are getting AI to do your git flows, because who needs to keep doing git add, git commit. Think again. You have not mastered it if you are writing all those commands. You should be writing git aliases. When you have shortened your git flow down to a couple of words and letters, you won't need to farm it to AI. Apply this to all areas before even thinking about getting AI to do it.

# Conclusion

Often the best thing to do is simple, but it's not the easy thing to do. I'm not against using AI. I'm against using it to do your job. Doing even the simple jobs build confidence, it builds discipline. When you feel you have mastery over those, and think "I can get AI to do this now" ask yourself have you really mastered it? Using AI means you lose touch with your code base.

> Once men turned their thinking over to machines in the hope that this would set them free. 
> But that only permitted other men with machines to enslave them.

---

