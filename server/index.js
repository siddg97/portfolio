require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const cors = require("cors");
var mailer = require("./routers/mailRouter.js");
var portfolioStat = require("./routers/portfolioRouter.js");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  })
);

app.get("/api", (req, res) => res.json({ msg: "Hello World!" }));
app.use("/api/user", portfolioStat);
app.use("/api/send-mail", mailer);
app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "client/build/index.html"))
);

const port = process.env.PORT;

app.listen(port, console.log("Server listening on port " + port));
