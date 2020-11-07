require("dotenv").config();
var express = require("express");
const { setupExpress } = require("./src/routes.js");

var app = express();

setupExpress(app);

const port = process.env.PORT;

app.listen(port, console.log("Server listening on port " + port));
