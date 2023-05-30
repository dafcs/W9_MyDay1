# Homework: Full Stack Games Hub App

### Learning Objectives

- Understand the relationship between client, server and database
- Be able to navigate a codebase that you haven't written

## Brief

Your boss has asked to you look over the codebase of a full-stack JavaScript application. The front-end is written in JavaScript using React, the back-end uses an Express server and a MongoDB database. Your task is to make yourself familiar with the codebase.

The application includes a README.md with instructions on running the application.

![Overview of the tech stack and tooling with commands](images/full_stack_js.png)

*Overview of the tech stack and tooling with commands*

*EDIT: Frontend is now written in React with the command to run `npm start`*

## MVP

### Task

Draw a diagram showing the dataflow through the application starting with a form submission, ending with the re-rendering of the page. This will involve a multi-direction data-flow with the client posting data to the server and the server sending data back to the client with the response. Detail the client, server and database in the diagram and include the names of the files involved in the process. If you're not sure what's happening when - `console.log` all the things in all the places!

### Questions

1. What is responsible for defining the routes of the `games` resource?
    create_router.js

2. What do you notice about the folder structure?  Whats the client responsible for? Whats the server responsible for?
    client is responsible for the handling the intake and display of the data
    server is responsible for the manipulation and storage of the data

3. What are the the responsibilities of server.js?
    Communicate with MongoDB

4. What are the responsibilities of the `gamesRouter`?
    Using restful roots and the correct method when communicating with the database

5. What process does the the client (front-end) use to communicate with the server?
    GameForm for adding games and GameCard to remove games, both with post request

6. What optional second argument does the `fetch` method take? And what is it used for in this application? Hint: See [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) on the MDN docs
    init can be use to set different settings, for example, the method, headers, mode, cache..as below.
    const myInit = {
        method: "GET",
        headers: myHeaders,
        mode: "cors",
        cache: "default",

7. Which of the games API routes does the front-end application consume (i.e. make requests to)?
    delete("/:id")
    post("/")

8. What are we using the [MongoDB Driver](http://mongodb.github.io/node-mongodb-native/) for?
    Storing and modifying the data

## Extension

Why do we need to use [`ObjectId`](https://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html) from the MongoDB driver?

Add to your diagram the dataflow for removing a game.

view <-> GameCard <-> GameGrid <-> GamesContainer <-> GamesService <-> Server <-> DB
