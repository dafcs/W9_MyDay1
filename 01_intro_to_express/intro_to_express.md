# Intro to Express

**Lesson Duration: 60 minutes**

## Learning Objectives
- Know what Express is
- Be able to use Express to serve up a JSON response

## Intro

We've learned a lot about JavaScript already, but so far we've concentrated solely on front-end. Now it's time to start looking at the the other end of the stack. We're going to learn how to write a simple web server using a JavaScript library called Express. In this lesson we will write a basic web server which responds to requests with some JSON.

The ability to write a web server opens up a lot of possibilities. We could deploy our apps to a server in the real world, create our own API or add greater back-end functionality; a database layer, for example.

## What is Express?

Express is an unopinionated, lightweight web framework for Node.js apps. We can use Express to write a web server that will listen for requests and serve our files to clients.

What do we mean when we say that a framework is unopinionated? This means that the framework is flexible and doesn't force us to adhere to their way of doing things.

> Instructor note: hand out start point.

## Start Point

Take a few moments to look over the start point.

Inside, you'll see - essentially - _two_ software applications - the client, and server. This means two NPM packages, two `package.json` files, and at least two terminal windows open!

The client is our front-end, which in this case, is our React application. There isn't much in it yet, but we'll be building it out later in the lesson. Suffice it to say, you won't be doing anything different to what you did last week!

In the server folder, we're going to be creating our API; the back-end of our application.

It is quite normal to separate our back-end and front-end like this. In the real world, it's very possible that you might build one back-end, and many front-ends! In this scenario, your back-end might be the single source of truth, or data, for your app, while you might build front-ends for many different devices or use cases:

- A web app
- Multiple mobile apps
- Alexa skills, or other voice applications

And so on.

## Creating a Web Server using Express

To begin with, we are going to write a simple server that handles the following HTTP request:

- method: GET
- route: home route ('/')
- port: 9000

We are going to respond to that request, firstly, by sending back a simple string to the client. Once we have done that, we will see how to send back JSON, which will generally be much more useful.

### Installing Express

Firstly, we want to work within the `server` directory. We also want to start using NPM in our server application. (Remember, this is treated separately from our client application!)

```sh
cd server
npm init -y
```

If we want to create a web server with Express then the first thing that we need to do is install Express.

```sh
npm install express
```

### Creating the Server

Now that we've installed Express, getting a simple web server up and running and handling our request only requires us to write a few lines of code. First, we'll create a file called server.js, which will contain our server code.

```sh
touch server.js
```

Now that we have a file to work in, we can `require` Express, so that its functionality is available to us.

```js
//server.js

const express = require('express'); // NEW
```

When we `require` Express, we are given a function. This function returns an object that provides us with various methods that we'll need to create a server. Let's invoke `express` and store the returned object in a variable called `app`.

```js
//server.js

const express = require('express');
const app = express(); // NEW
```

### Defining Routes

Now we can use Express to define our routes. It has a set of methods that correspond the the HTTP request methods, including:

1. GET - `get`
2. POST - `post`
3. PUT - `put`
4. DELETE - `delete`

Each of these methods takes two arguments:

1. The route as a string.
2. A callback containing the behaviour that we would like to execute when we receive a request to this route.

We want to enable a client making a GET request to the home route, to see `'Hello World!'` displayed on the page. To do this we are going to use the `get` method, passing it the following arguments:

1. Route - `/`
2. A callback that responds with the string `'Hello World!'`

```js
//server.js

const express = require('express');
const app = express();

app.get('/', function () { // NEW

});
```

### Responding to Requests

This callback should have two parameters: `req` and `res`. When a client makes a request to this route, our callback will be passed objects representing the request that we have received from the client and the response that we would like to send back to the client. We can then use these objects to do various things: access the data that was sent with a post request or decide how we would like to respond to the request, for example.

```js
//server.js

// ...

app.get('/', function (req, res) { // MODIFIED

});
```

The `res` object has a `send` method, which can be used to send various things to the client. In this case we will sending the string, `'Hello World!'`, back to the client.

```js
//server.js

// ...

app.get('/', function (req, res) {
  res.send('Hello World!');
});
```

Okay, looks like we're ready to go. Let's run our server and make a request to it in the browser.

```sh
node server.js

# File executes and completes with no output
```

Uh oh! We didn't tell our server to listen for requests. It just executes our code and then completes. A web server should keep running, waiting for clients to make requests to it so that it can respond appropriately.

`app` has a `listen` method which we can use to do this. When we call `listen`, we need to pass it the port number that we would like to listen for requests on and a callback to execute when the server is running.

All we really need this callback to do is `log` a string stating that the server is running. The server will then `log` our message and wait for requests.

```js
//server.js

// ...

app.listen(9000, function () { // NEW
  console.log('App running on port 9000');
});
```

We have made changes to our server.js so we'll need to restart our server. We could type `node server.js` again, but as this is something that we may do a lot it's probably better to add an npm script. Like `npm test`, which we saw earlier, npm expects us to define a script called `start`. It's common to use this as an alias for starting your server, as this is the script that you will have to run to start your project.

```js
//package.json

"scripts": {
    "start": "node server.js", // NEW
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Now we can start our server by typing `npm start`.

```sh
npm start

# -> App running on port 9000
```

You should now be able to navigate to http://localhost:9000 in the browser and our string should be displayed.

We've given ourselves a bit of a problem, however. If we change our code, and refresh the page:

```js
app.get('/', function (req, res) {
  // CHANGED
  res.send('Hi, World!');
});
```

Unfortunately, our output doesn't change. We would have have to restart our server in the terminal, and this gets old, fast.

## Nodemon

You might be sick and tired of restarting your server by this point. Luckily there's a handy utility that we can use to watch for modifications and restart our application if our server.js changes. This utility is called Nodemon.

Nodemon is a command-line app that can be installed via npm and used via npm scripts.

```sh
npm install --save-dev nodemon
```

Next we'll add a script to our package.json, so that we can run our server with Nodemon.

```js
"scripts": {
  "start": "node server.js",
  "server:dev": "nodemon server.js", // NEW
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

Now we can use `npm run server:dev` to run our server with Nodemon, so that it watches the file for changes and restarts the server as appropriate.

```sh
npm run server:dev

# -> [nodemon] watching: *.*
# -> [nodemon] starting `node server.js`
# -> App running on port 9000
```

## JSON

Rather than send a string as a response, let's send some JSON instead. Our `response` object has a `.json()` method we can use here, which we can pass a JavaScript object which will be sent to the client.

```js
app.get('/', function (req, res) {
  // CHANGED
	res.json({message: "Hello World!"});
});
```

If we look in the browser now, we should be seeing a JavaScript response. Success! We've built our first API!

Let's finish off our first full-stack JavaScript application by writing a front-end React app that consumes this API.

Taking a new terminal window:

```sh
cd ../client
npm install
npm start
```

We're going to try to grab a response from our API. Let's see what happens.

```js
// App.js
import React, {useEffect} from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:9000/')
      .then(response => response.json())
      .then(data => console.log(data));
  })

  // AS BEFORE
}
```

What do you see if you open your terminal?


> Access to fetch at 'http://localhost:9000/' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

This is known as a CORS error. To understand this error, we first have to understand the [same origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).

The same-origin policy is a security feature that prevents scripts running on different domains from talking to each other. Since our API is running on one port (3000), and our front-end application is running on another, (probably 8080), the request is blocked.

If we have control over the API (which in this case is our server application), we can relax this policy. We can state which domains and ports should be allowed to use our API, and which routes and HTTP methods should be affected.

For simplicity's sake, we're going to allow our API to be accessible anywhere.

Let's navigate back to our server directory, and install Express' [CORS](https://expressjs.com/en/resources/middleware/cors.html) package.

```sh
cd ../server
npm install --save-dev cors
```

Now that we've done this, we can configure our Express server to use CORS.

```js
const express = require('express');
const app = express();

// ADDED
const cors = require('cors');
app.use(cors());
```

We should now be able to write our front-end application.

> Task - 5 minutes - display the message sent by the server.

Solution:

```js
import React, {useEffect, useState} from 'react'; //CHANGED

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:9000')
    .then(res => res.json())
    .then(data => setMessage(data.message));
  })

  return (
    <>
      <h1>My App</h1>
      <p>The server said: {message}</p>
    </>
  );
}
```

## Recap

What is Express?

<details>
<summary>Answer</summary>

Express is an unopinionated, lightweight JavaScript web framework.
</details>
<br>

When creating a server that responds to a request, what three pieces of information will you need?

<details>
<summary>Answer</summary>

1. The route path
2. The request method
3. The port number you want to listen on
</details>

## Conclusion

We just wrote our first web server using JavaScript. If we wanted to, we would now be able to deploy our apps in the real world.

Next we'll look at how we can create our own RESTful JSON API, just like the ones that we've been using to gather data. Later we'll add a database layer, allowing us to persist and modify the data provided by our API.
