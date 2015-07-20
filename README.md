![](headings/2.2.png)

# Organizing backbone js code

Create the following directories inside the "js" folder:

* collections
* models
* views

Next create the following files inside the "js" folder:

* app.js
* router.js

*app.js* is the main file of our application, so it has to be loaded first (right after all the libraries). It is a common mistake to place files in the wrong order so please watch out for it:

```html
<script src="js/app.js"></script>
```

*router.js* will contain app's routes which we are going to implement in a later lesson.

```html
<script src="js/router.js"></script>
```

Lastly let's add a `div` tag to contain all our project's elements. Many developers give it an id of `app`. I'll also assign it a `container` class which equips this element with some Bootstrap's styles. For testing you may also add some text inside this "div":

```html
<div id="app" class="container"><h1>Hello!</h1></div>
```

# Loading the project

Okay, now boot your web server, open your browser and navigate to [http://127.0.0.1/organizer/index.html](http://127.0.0.1/organizer/index.html).

Open up browser's console by pressing `F12` and reload the page by pressing `F5`. You should not see any errors in the console. Type in `Backbone` in the console and press `Enter`. You should see some basic information about BackboneJS, including its version.

Before proceeding to the next step, remove the `h1` tag from the `.container`.