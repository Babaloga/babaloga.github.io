---
layout: post
title:  "Porting The Painting of Evie Ward to Godot: Card Basics"
---

Inspired by Balatro and my Tabletop Simulator port of The Painting of Evie Ward, I've started working on a full standalone version of the game.
Starting with a simple class containing the card value itself:

<img class="easy-image" src="\images\blog images\The_Painting_Card_Basics\CardData.png">

From there I built out the most basic version of the card mechanics required for the game: Decks contain a pre-defined list of cards, clicking on a deck will draw a card to a designated zone.

<img class="easy-image" src="\images\blog images\The_Painting_Card_Basics\DemoScene.png">

The zones can be easily resized with a custom widget, and the behavior of the cards in the zone can be adjusted.

<img class="easy-image" src="\images\blog images\The_Painting_Card_Basics\Inspector.png">

I plan to continue working on this after the holidays when I have more time.