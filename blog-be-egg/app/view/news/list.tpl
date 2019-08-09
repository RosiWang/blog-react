<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="{{ item.preview_url }}" target='_blank'>{{ item.app }}</a>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>