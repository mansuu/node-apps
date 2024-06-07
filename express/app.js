/**
 * require('express) returns a function
 * callling express function gives an object
 * by convention, that object is called app
 */
const express = require("express");

const app = express();

/**
 * Api routes with or without params
 * when you need to have mandatory data to
 * use route params
 */
app.get("/", (req, res) => {
  //Send a response to client
  res.send("Welcome to Express js, a node framework");
});

app.get("/details", (req, res) => {
  //Send a response to client
  res.send("Working with details route");
});

// app.get("/details/:name/:age", (req, res) => {
//   //Send a response to client
//   const reqParams = req.params;
//   console.log("details", reqParams);
//   res.send("Name : " + reqParams.name + " Age : " + reqParams.age);
// });

/**
 * Query parametres
 * When data is optional
 * query oarams are used
 */
app.get("/details/:name/:age", (req, res) => {
  const routeParams = req.params;
  const queryParams = req.query;
  console.log("Route params", routeParams);
  //it will print empty object if no query param is passed from client
  console.log("Query params", queryParams);
  res.send("Name : " + routeParams.name + " Age : " + routeParams.age);
});

/**
 * Serve statis files using express
 * we will use alias for the actual folder
 * we have on the server, so that client does not know
 * about the folders on the server
 */
const path = require("path");

//Create an alias for the folder, files are in to be served
app.use("/public", express.static(path.join(__dirname, "assets")));
app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "index.html"));
});

app.listen(3000);
