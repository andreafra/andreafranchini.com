---
title: 'Software Engineering I Project: "Santorini"'
publishDate: 2020-01-01
description: "An implementation in Java of the tabletop game Santorini. Part of my bachelor's thesis."
sourceUrl: https://github.com/andreafra/ing-sw-2020-ferrara-franchini-fusco
demoUrl: https://player.vimeo.com/video/485526632
tags:
    - Java
    - JavaFX
    - Game
---

This was a mandatory project that served as a thesis for my bachelor's degree. I worked in team with two great fellow engineers, [@ferrohd](https://github.com/ferrohd) and [@luigifusco](https://github.com/luigifusco).

It consisted of a digital implementation of the tabletop game "[Santorini](https://boardgamegeek.com/boardgame/194655/santorini)", an indeed very boring game.

The scope of the project was to achieve a working Java implementation of a server and clients, using sockets for connectivity, MVC design pattern, and others patters as well.

The part I feel most proud of is the perfectly working 3D view of the game using JavaFX (which definitely is not to be used for 3D games, as it lack a decently writted API documentation).

Let's not talk about the part in which the 2D/3D assets weren't properly licensed, or so I've been told. Hmm, I wonder [where'd they come from](https://apps.apple.com/us/app/santorini-board-game/id1456647343).

Here's a little sneak peek at how it look (since you'd have to download the JAR's from GitHub to play it):

<div style="padding:81.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/485526632?h=9f7aaa3f45&loop=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

### Relevant literature

The book "[Game Programming Patterns](https://gameprogrammingpatterns.com/)" (which I recommend) from Bob Nystrom has helped me understand certain pattern used in game development (especially the _flyweight_ and _command_ one).
