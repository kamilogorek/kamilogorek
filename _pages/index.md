---
permalink: /
layout: home
---

## Recent post

{% for post in site.posts limit:1 %}
### [{{ post.title }}]({{ post.url }})
_{{ post.date | date: "%B %e, %Y" }}_
{{ post.excerpt }}
{% endfor %}

<br/>
<hr/>
<br/>

**Twitter:** [https://twitter.com/{{ site.twitter_username }}](https://twitter.com/{{ site.twitter_username }})<br/>
**GitHub:** [https://github.com/{{ site.github_username }}](https://github.com/{{ site.github_username }})<br/>
**LinkedIn:** [https://linkedin.com/in/{{ site.linkedin_username }}](https://linkedin.com/in/{{ site.linkedin_username }})<br/>
