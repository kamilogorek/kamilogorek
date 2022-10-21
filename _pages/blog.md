---
title: Blog
permalink: /blog/
---

---

{% for post in site.posts %}

## [{{ post.title }}]({{ post.url }})

<p class="post-meta">
  <time>{{ post.date | date: "%B %e, %Y" }}</time>
</p>

{{ post.excerpt }}

{% if forloop.last == false %}

---

{% endif %}

{% endfor %}
