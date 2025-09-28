---
title: Abstraction ownership
desc: “With code ownership, comes great maintenance cost” - Uncle Ben probably.
published: true
date: 2025-09-28
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/atlas-carrying-the-world.webp
tags:
  - Insights
---


<script>
  import Translate from "$components/Translate.svelte"
</script>

Every serious project needs an abstraction for the visual UI. Whether you build your own UI components or use a library, you're creating a layer between your app and the low level CSS styles, to make it easier to maintain. Even if you're "just writing CSS", you're still creating an abstraction when you name your classes and structure your styles into a consistent format.  

> The question is:  
Should you own this abstraction in your codebase, or should you use an already maintained one?  
Lets review the trade-offs and long-term impact of each choice.

## Code ownership gives you maximum customizability

Owning the code means you can change anything. You can tweak every detail. 100% control. This level of control is tempting, especially if you have obsessive design requirements. Example of this would be having the source code of all UI components in your own code base.

What's the catch?

## Cost of ownership is maintenance

Control comes with a cost: maintenance. Every bug, update, and new feature is now your job. The more you customize, the more you have to maintain. Over time, it will get harder and harder to maintain. 

There will be bugs and issues, and they won't get fixed unless you track them and resolve them manually. The tools and libraries you depend on will evolve and your code won't, unless you actively update it. This leads to technical debt and frustration. Alternatively, you should hire more people just to maintain the exisiting UI library which is direct financial cost.

| Aspect             | Owning the Code          | Using libraries         |
|--------------------|--------------------------|--------------------------|
| Customization      | ✅ Full control          | ✅ Customization based on a design system |
| Maintenance        | ❌ You maintain everything| ✅ Maintained for you    |
| Updates            | ❌ Manual or none         | ✅ Updates are automatic |
| Bugfixes           | ❌ You fix bugs           | ✅ Bugfixes included     |
| Documentation      | ❌ You write docs         | ✅ Docs are provided     |
| Community support  | ❌ You are on your own    | ✅ Community support     |
| Testing            | ❌ You test it yourself   | ✅ Maintainers do the testing |
| Learning curve     | ❌ Must know all details  | ✅ Focus on usage       |

## The real cost of software is maintenance

Building software is exciting. Shipping new features feels great. But the real cost isn't in creating something new, it's in keeping it running in the long term. Maintenance is where most of the time and money goes.

> Every line of code you own, is a line you have to maintain, test, fix, and update.

## Why keeping UI components in your codebase fails in the long run

When you keep UI components in your own codebase, maintenance costs grow slowly at first. As your project grows, so does the burden. Eventually, the code becomes stale and outdated. No one wants to touch it. Updates and bugfixes feel risky. Unless you hire more people just for maintenance, the problem only gets worse.

This is going to happen to every project that uses Shadcn/ui CLI for example. Shadcn/ui is a fantastic CLI for generating components into your own code base, however if the source code lives in your own codebase, you are now responsible for maintaining it.  
I doubt many people who are using it actually realize the long term cost of this decision.  
There's a reason the software industry has moved away from owning everything in-house, towards using libraries and services that are maintained by the community.

## Using a customizable UI library is a better investment

There's a better way. Use a UI library that allows customization. You get the flexibility to change things based on a design system, but you don't have to worry about the infrastructure. Someone else maintains the components, handles updates, and fixes bugs. You get to focus on building your product, not maintaining the foundation. In the long run, this is a smarter investment for your team.

## What do you want to spend time on?

- You can own every line of every UI component in your own code base and maintain it yourself.  

- Or you can use a package that provides the components for you, and focus on your own product instead.

What do you want to spend your time and energy on?
