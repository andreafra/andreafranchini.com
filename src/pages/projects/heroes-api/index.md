---
title: Heroes API
publishDate: 2019-01-01
description: "An experiment to learn REST, an API for the game Heroes of the Storm and now a dead project."
tags:
   - Express
   - REST
   - Glitch
---

_Heroes API_ was a quick experiment for a third-party workaround implementation of REST API for Blizzard’s game _Heroes of the Storm_. Since the game (which is kinda dead now) still hasn't provided its own API to see player stats, I put together a scrapper to gather data from third-party websites that parsed replays submitted by players. _Of course_, they didn’t provide any APIs either. I took care of caching the retrieved data, to minimize the impact on the websites it scrapped. Anyway, none of those website are online anymore.

To test the features of this API, I also scrapped together a Discord bot that provided players with basic stats in a simple and useful format.

It was hosted on [Glitch.com](https://glitch.com/edit/#!/heroes-api), a lovely website I always recommend to test small NodeJS server.
