---
title: Software Engineering I Project
date: "2020"
description: "An implementation in Java of the tabletop game Santorini, which was part of my bachelor's thesis."
---

This was a mandatory project that served as a thesis for my bachelor's degree. I worked in team with two fine fellow engineers, [@ferrohd](https://github.com/ferrohd) and [@luigifusco](https://github.com/luigifusco).

It consisted of a digital implementation of the tabletop game "[Santorini](https://boardgamegeek.com/boardgame/194655/santorini)", an indeed very boring game.

The scope of the project was to achieve a working Java implementation of a server and clients, using sockets for connectivity, MVC design pattern, and others patters as well.

The part I feel most proud of is the perfectly working 3D view of the game using JavaFX (which definitely is not to be used for 3D games, as it lack a decently writted API documentation).

Let's not talk about the part in which the 2D/3D assets weren't licensed by the university, or so I've been told. Hmm, I wonder [where they come from](https://apps.apple.com/us/app/santorini-board-game/id1456647343).

Here's a little sneak peek at how it look (since you'd have to download the JAR's from GitHub to play it):

`vimeo: https://vimeo.com/485526632`

### Relevant literature

The book "[Game Programming Patterns](https://gameprogrammingpatterns.com/)" (which I recommend) from Bob Nystrom has helped me understand certain pattern uses in game development (especially the _flyweight_ and _command_ one).
