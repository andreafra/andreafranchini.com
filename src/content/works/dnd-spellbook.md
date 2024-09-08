---
title: "D&D Spellbook"
publishDate: 2023-02-01
description: "Manage spell lists for Dungeons & Dragons. A serverless application."
sourceUrl: https://github.com/andreafra/dnd-spellbook
demoUrl: https://dndspellbook.vercel.app
tags:
    - TypeScript
    - Next
    - React
    - Redux
    - Vercel
    - Serverless
    - Tailwind
---

An experiment and tool to handle collections of spells for Dungeons & Dragons 5e.

It was developed with a simple goal in mind: to explore and quickly assemble a list of spells for the game.
I choose Vercel since I've been using it for a while to host JavaScript applications, especially when using Next to better intergrate with their serverless features.

It uses an external database on CockroachDB (serverless, too), and lets users authenticates using OAuth (only Discord is supported at the moment).

The UI was quickly put together using Tailwind, which is great for prototyping, and quite usable if you can break down your UI to reusable components.

It uses Redux to manage the state (spells, filters, settings).

A [demo is available](https://dndspellbook.vercel.app), of course.

## Source code

[Github repository](https://github.com/andreafra/dnd-spellbook)
