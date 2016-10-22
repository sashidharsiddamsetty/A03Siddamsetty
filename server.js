var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();  // make express app
var http = require('http').Server(app);

// set up the view engine
app.set("views", path.resolve(__dirname, "assets")); // path to views
app.set("view engine", "ejs"); // specify our view engine

app.use(express.static(__dirname+'/assets'));

// manage our entries
var entries = [];
app.locals.entries = entries;

// set up the logger
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

// http GET (default and /new-entry)
app.get("/", function (request, response) {
  response.render("index");
});
app.get("/contact", function (request, response) {
  response.render("contact");
});
app.get("/wannatravel", function (request, response) {
  response.render("wannatravel");
});
app.get("/Aboutme", function (request, response) {
  response.render("Aboutme");
});
app.get("/guestbook", function (request, response) {
  response.render("guestbook");
});
app.get("/new-entry", function (request, response) {
  response.render("new-entry");
});

// http POST (INSERT)
app.post("/new-entry", function (request, response) {
  if (!request.body.title || !request.body.body) {
    response.status(400).send("Entries must have a name and a body.");
    return;
  }
  entries.push({
    title: request.body.title,
    content: request.body.body,
    published: new Date()
  });
  response.redirect("/guestbook");
});

// 404
app.use(function (request, response) {
  response.status(404).render("404");
});

// Listen for an application request on port 8081
http.listen(8082, function () {
  console.log('A03 app listening on http://127.0.0.1:8082/');
});
