![](headings/1.2.png)

# Prerequisites for the course

Before diving into the code let's discuss some prerequisites for this course.

You only need to have a basic understanding of HTML, JavaScript and jQuery. Deeper knowledge of JavaScript is helpful but is not required, as this is the beginners course and we are not going to discuss something very complicated.

You will need a text editor, a browser and some kind of web server.

* [Sublime Text](https://www.sublimetext.com/2) is one of the most popular choices that has a free version.
* [Brackets](http://brackets.io/) is a free editor and also is a nice choice.
* If you prefer IDE, there are also plenty to choose from, for example [WebStorm](https://www.jetbrains.com/webstorm/), however you'll have to buy it.

Talking about the browser, I'd recommend utilizing Firefox or Chrome, but Internet Explorer 11 is okay too.

You may also install [FireStorage Plus](https://addons.mozilla.org/en-US/firefox/addon/firestorage-plus/) addon for Firefox which allows inspecting Local Storage as our demo app will rely on it. Chrome already has this functionality built-in.

# Setting up Web Server

You will also need to set up web server on your local machine. If you are on Windows, you may take advantage of **Microsoft IIS** web server (it is not included in Home versions). To install it

* Navigate to Control Panel – Programs and Features – Turn Windows Features on or off
* Place checkmark near the Internet Information Services.
* Installation will take a couple of minutes.

By default IIS stores its files in the *C:\inetpub\wwwroot* folder. Create some file there and navigate to [http://127.0.0.1](http://127.0.0.1) to check if you server is running.

Alternatively you may use Apache or [WAMP](http://www.wampserver.com/en/) stack for Windows which includes Apache web server and a bunch of other components, LAMP for Linux (which basically includes the same), [MAMP](http://www.mamp.info/en/) for Macintosh and Windows or just use any other web server you like.