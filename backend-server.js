const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = new express();
const port = 8000;

const message = process.env.TESTMESSAGE;

app.get("/", (req, res) => {
  res.send(message);
});

app.get("/mypantry", (req, res) => {
  res.send("My pantry");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/raymond", (req, res) => {
  res.send("Raymond");
});

app.get("/elizabeth", (req, res) => {
  res.send("cats");
});
