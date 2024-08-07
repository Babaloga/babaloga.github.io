---
layout: post
title:  "Distance Fields"
---
Distance fields!
<div width="100%" style="display: flex;">
    <img src="\images\blog images\Distance_Fields\BeachOutline.jpg" style="min-width: 0; padding: 1pt; object-fit: contain;">
    <img src="\images\blog images\Distance_Fields\BeachFields.jpg" style="min-width: 0; padding: 1pt; object-fit: contain;">
</div>
Set up a process for generating distance fields from line drawings. Each non-transparent pixel is assigned a color representing its position, with the red channel storing the x coord and the green channel storing the y coord. Then each of the transparent pixels is filled in with the color corresponding to the closest solid pixel.
<div width="100%" style="display: flex;">
    <img src="\images\blog images\Distance_Fields\BridgeOutline.jpg" style="min-width: 0; padding: 1pt; object-fit: contain;">
    <img src="\images\blog images\Distance_Fields\BridgeFields.jpg" style="min-width: 0; padding: 1pt; object-fit: contain;">
</div>
This way you can quickly find the closest point on the drawing to any particle simply by sampling the distance field texture at the particle's position.