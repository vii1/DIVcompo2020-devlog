---
layout: main.html
---

<h2>Read what I have to say</h2>

  <ul class="recent">
    {{#each articles }}
      <li>
        <div class="title"><a href="{{ path }}">{{ title }}</a></div>
        <div class="date">{{ date }}</div>
      </li>
    {{/each}}
    </ul>
