var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const cors = require("cors");
const { mailRouter, statRouter } = require("./routers");

function setupExpress(app) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use("/assets", express.static(path.join(__dirname, "assets")));
    app.use(express.static(path.join(__dirname, "client/build")));

    app.use(
        cors({
            origin: process.env.CORS_ORIGIN || "http://localhost:3000",
        })
    );

    app.get("/api", (_, res) => res.json({ msg: "Hello World!" }));
    app.use("/api/user", statRouter);
    app.use("/api/send-mail", mailRouter);

    app.get("/*", (_, res) =>
        res.sendFile(path.join(__dirname, "client/build/index.html"))
    );
}

module.exports = {
    setupExpress,
};
