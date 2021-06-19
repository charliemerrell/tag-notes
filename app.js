const express = require("express");
const path = require("path");
const db = require("./initialiseDb");
const userRouter = require("./routes/users");
const sessionRouter = require("./routes/sessions");

const app = express();

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/sessions", sessionRouter);

db.sync();

app.get("/api/hello", (req, res) => {
    res.send("Hello, World");
});

module.exports = app;
