---
title: Blog
permalink: /blog/
---

---

{% for post in site.posts %}
## [{{ post.title }}]({{ post.url }})
_{{ post.date | date: "%B %e, %Y" }}_

{{ post.excerpt }}

---
{% endfor %}
