---
layout: post
title:  "Shaders in Godot: Simple Toon Water"
---
Working on writing some common shaders in Godot, starting with a simple toon water shader.

<video width="648" height="648" src="\images\blog videos\ToonWaterShaderRecording.webm" controls></video>

It took a bit of trial and error to find the source of that weird bubbly aliasing around the color boundaries. It turned out to be the import settings of the noise images I was using. Toggling "High Quality" on fixed the issue.

<video width="648" height="648" src="\images\blog videos\ToonWaterShaderRecording2.webm" controls></video>
