> Learn to write a web backend in 5ish minutes!

# Hello World!

This tutorial walks you through how to setup a backend server in only 12 lines!

# Before we get started

**You'll need to install node.**   
If you're on a mac, you can run `brew install node` in your shell.   
If you're on a PC, you should check out [the download page](https://nodejs.org/en/download/).

**Familiarize yourself with Javascript.**   
Don't worry if you have never used it before. It is a really straight forward straight forward language to learn and is similar to many other languages you already know. Learn X in Y minutes has [a great tutorial here](https://learnxinyminutes.com/docs/javascript/) that takes you through all of the syntax.

Node is a "run-time" for javascript. Think of it like the Java Virtual Machine for Java. It's also an ecosystem of libraries and helpful tools that we can use for writing servers.

Node itself is incredibly fast and written in C++.

# Now let's run this.

Clone the repo!

```
git clone https://github.com/gu-app-club/lets-learn-express.git
```

Now inside of your folder, run the following:

```
npm install
```

NPM is node's package manager. If you want to install a library in node, you can search for an npm package in [the registry](https://www.npmjs.com/).

The `package.json` file in this project is NPM's list of libraries installed to the project. When you run `npm install`, it will download the files to your computer. If you look inside, you'll see that I've already added `express` under `dependencies`.

# What's express?

Express is a library that makes it really easy to write servers. We'll cover most of the relevant things here, but if you're curious, you should go checkout the [express website](http://expressjs.com/).

# Let's look at some code.
Open up `server.js`.

If you're not familiar with javascript, that's okay! Javascript is quite similar other languages and in general is pretty simple. We'll decode some things that might trip you up.

Our first line:

```
var express = require('express')
```

We see a Node import statement: `require`. If `require` sees something like a filepath (ex: `require("./path/to/my/file.js")`), then it will go look for that file.

If it sees a word, like `require("express")`, it will go look inside the `node_modules` folder (the folder should have been created when we ran `npm install`).

Then we're going to create a new instance of our express:

```
var app = express()
```

## Routes

A route is a location of a function on the server. When someone else calls that route, it will run the function assigned to it and then return the result back to the caller.

HTTP Routes have different types, sometimes called "verbs" like "GET" and "POST". A "GET" route returns back information and a "POST" route sends information. When your browser goes to a website, like say... `http://evanconrad.com/`, what it's actually doing is:

```
GET "http://evanconrad.com/"
```

which calls a function that returns the HTML content for that page.

For the moment, we only care about GET requests. We'll learn about other ones later.

## We're going to create a route.

We're going to create a function `onRouteHit` which will happen every time a route is hit. At the moment, we're just going to have it send a response back saying "Hello World".

```
function onRouteHit(request, response) {
  response.send('Hello World')
}
```

#### An index route.

Next, we're going to "route" that function to a specific path. A path is the other part of the URL besides for the domain name. They're kind of like file systems. if I had a domain name: `evanconrad.com` and I was on `evanconrad.com/coolstuff/fuzzballs`, then the route would be `/coolstuff/fuzzballs`.

The "index" route for `evanconrad.com` is what happens when you just type in `evanconrad.com`. It's essentially the root directory of the website. We represent this with the route `/`.

In our `server.js` file, we've created an index route `/` and assigned it to the function `onRouteHit` that we've created.

```
app.get('/', onRouteHit)
```

## Let's launch!

Finally, in `server.js` we're going to start our server and have it listen to port 3000.

```
app.listen(3000, function() {
  console.log("Our server is listening to localhost:3000")
})
```


## Let's connect!

We can run our code by going **into our terminal** and running the following inside of our project folder:

```
npm start
```

And then in a web browser (like chrome), type `localhost:3000` in address bar.

You should see our "Hello World" on the screen!
