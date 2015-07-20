![](headings/3.5.png)

# Styling and Organizing the App

Before proceeding to the next lesson let's spend a couple of minutes and style our app just a bit.

First of all, add a nice top menu provided by Bootstrap:

```html
<nav class="navbar navbar-inverse">
  <div class="container">
    <div id="navbar" class="collapse navbar-collapse">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Organizer</a>
      </div>
      <ul class="nav navbar-nav">
        <li><a href="#">Home</a></li>
      </ul>
    </div>
  </div>
</nav>
```

Next let's work on our list a bit. Assign `list-group` class to the unordered list:

```js
className: 'list-group'
```

and `list-group-item` to each individual item:

```js
className: 'list-group-item'
```

Also it is not the best idea to render the list directly into the `#app` replacing any content that might be present there. So create a separate block to put contents there:

```html
<div id="app" class="container">
  <div id="events-list"></div>
</div>
```

and modify the `render` function

```js
$('#events-list').html(this.el);
```

You may also add a nice heading like this:

```html
<div class="page-header"><h1>Events</h1></div>
```

And a footer:

```html
<footer class="footer">
  <div class="container">
    <p class="text-muted">&copy; 2015 Organizer</p>
  </div>
</footer>
```

Okay, now our app looks a bit better.
