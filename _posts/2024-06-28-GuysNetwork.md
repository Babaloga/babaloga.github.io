---
layout: post
title:  "Guys&trade; in the Browser"
---

As a graphics-light, multiplayer-only game, Guys™ seems like a natural fit to be a browser game. It would also be a much easier way of adding Mac support without having to outsource to a friend with access to a Mac every time I updated the game. Being such a natural fit, it's something I tried right away. Building the game for WebGL and getting the netcode working over websockets were both pretty simple. The problem I ran into was https. Browsers don't like it when you create insecure websocket connections from a secure page (for instance, an itch.io page) so I'd have to use secure websockets, which meant getting a proper certificate for my home server. It was my first time dealing with SSL myself, and with it being a relatively new and niche feature of Unity netcode there weren't a lot of resources to pull from. Even the documentation was very spotty.
After working at it for a while I took a break and got around the issue entirely by hosting the game on Github Pages and telling people to backspace the "s" that their browsers were automatically adding after the "http" in the url, but that was obviously not an ideal solution so eventually I muddled through getting secure web sockets working.

