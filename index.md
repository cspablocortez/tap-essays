---
layout: default
---

# All posts:

{% for post in site.posts %}
<ul>
    <!-- <h2><a href="{{ site.baseurl }}{{ post.url}}">{{ post.title }}</a></h2> -->
    <h2><a href="{{ post.url}}">{{ post.title }}</a></h2>
</ul>
{% endfor %}