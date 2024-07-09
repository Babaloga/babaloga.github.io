---
title: Center of George-Eltzroth-Related Activity
layout: default
---

{% for post in site.posts %}
<div class="blogpost-thumb" id="{{ post.title }}" style="display:flex;">
    <a href="{{ post.url }}" style="height: 100%; width: 100%; display:flex; flex-direction: row;">     
        <div>
            <h3>{{ post.title }}</h3>
            <h4>{{ post.date | date: "%B %-d, %Y" }}</h4>
        </div>
    </a>
</div>
{% endfor %}