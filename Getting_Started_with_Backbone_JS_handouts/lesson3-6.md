![](headings/3.6.png)

# Precompiling Handlebars.js templates

As you remember, we've included the full version of Handlebars instead of the runtime. However runtime is 5 times smaller than the full one! To use it, however, the templates have to be precompiled and hooked up to a project in a form of JavaScript file.

The `compile` function takes the template and turns it into a JavaScript function that accepts some data and returns HTML as a result. This compilation occurs at runtime. Precompilation, in turn, occurs only once. Instead of providing those templates, you provide a single JS file with templates already being converted to functions. Precompilation, however, requires some additional steps.

# Node.js installation

First of all you will have to install Node.js if it is not present on your developer's machine. Node.js is a platform meant for building large scalable network applications and you can download it at [https://nodejs.org/download/](https://nodejs.org/download/). Discussing NodeJS is out of the scope of this course, however we are not going to use it anyways. We will need **NPM (Node Package Manager)** to easily install various JavaScript libraries on your PC. So while installing Node.js, make sure to include NPM in your installation.

Next open the console and update NPM:

```
npm install npm -g
```

Next install Handlebars software:

```
npm install -g handlebars
```

# Precompile the template using npm

Now create *event.handlebars* file and place template's contents there

```html
{{title}}
<a href='#' class='btn btn-danger'>remove</a>
```

Run the following command:

```
handlebars event.handlebars -f event.js
```

The first argument is the input file. Using the `f` flag you provide the output destination.

Open the generated *event.js* file – this is a basic JavaScript.

Remove the template from the *index.html* and hook up *event.js* instead:

```html
<script src="event.js"></script>
```

Also remove Handlebars full version and load runtime instead:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.2/handlebars.runtime.js"></script>
```

The `render` function requires some changes. Remove the `template` variable completely as we don't need it anymore:

```js
var template = Handlebars.compile($('#event-template').html());
```

Now use Handlebars `templates` method followed by `event` (`event` was the name of our handlebars file so during precompilation the template was inserted inside `event` property):

```js
this.$el.html( Handlebars.templates['event'](this.model) );
```

Now reload the page and check that everything is working fine!