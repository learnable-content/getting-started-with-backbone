![](headings/5.2.png)

# Creating router

We create a router by using basic extending functionality:

```js
Organizer.Router = Backbone.Router.extend({

});
```

Inside we have to provide the `routes` object. The key is the path and the value is the function's name to fire when a user visits this path:

```js
Organizer.Router = Backbone.Router.extend({
  routes: {
    'test': 'greet'
  },
  greet: function() {
    console.log('greet');
  }
});
```

Instantiate router in the `initialize` function inside the *app.js* file:

```js
Organizer.router = new Organizer.Router();
```

Navigate to the new route: *http://127.0.0.1/organizer/index.html#test*. However, nothing will happen. We also have to boot the special Backbone's history API:

```js
Backbone.history.start();
```

This API is going to record where we are navigating and allow us to use Back and Forward buttons in the browser.

# Navigate method

We can also programatically update the URL and fire the corresponding action:

```js
Organizer.router.navigate('test');
```

The URL was updated however we see no message in the console. The route's action will not performed until we pass the `trigger: true` option:

```js
Organizer.router.navigate('test', {trigger: true});
```

If you do not wish to make an entry in the browser's history, pass `replace: true`:

```js
Organizer.router.navigate('test', {trigger: true, replace: true});
```

If you wish to use History API instead of hash symbols, provide `pushState` option:

```js
Backbone.history.start({pushState: true})
```

# Route method

If you wish to generate route on the fly, call the `route` method:

```js
Organizer.router.route('test', 'test', function() {console.log('test page')});
```

The first argument is the actual URL portion, the second is the name and the third is the optional callback.

If the callback is not provided, the handler with that name is being called:

```
Organizer.router.route('test_handler', 'greet');
Organizer.router.navigate('test_handler', {trigger: true});
```

The `greet` function will be called.

You may also be wondering whether jQuery's page load event is fired each time we use navigate. Let's check that out:

```js
$(document).ready(function() {
  Organizer.initialize();
  console.log('page is loaded');
});
```

```js
Organizer.router.navigate('test', {trigger: true});
```

So it is not firing.