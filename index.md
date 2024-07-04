---
layout: mac-theme
---

<c-grid>
  <c-window class="window-notes grid-column-12">
    <a class="window-title window-title-link" href="#">
      <h2>Posts</h2>
      <svg viewBox="0 0 14 14" class="window-title-icon">
        <use xlink:href="#icon-arrow"></use>
      </svg>
    </a>
    <div class="window-content">
      <ol class="notes-list">

        {% for post in site.posts %}

          <li>
            <a class="notes-list-item {{loop.index}}" href="{{ post.url }}">
              <div>
                <h3 class="notes-list-title">{{ post.title }}</h3>
                <p class="notes-list-extract">{{ post.excerpt }}</p>
              </div>
              <time class="font-code notes-list-extract notes-list-date" datetime="{{ post.date }}">
                {{ post.date | date: "%m/%d/%Y"}}
              </time>
            </a>
          </li>

        {% endfor %}

      </ol>
    </div>
  </c-window>
</c-grid>