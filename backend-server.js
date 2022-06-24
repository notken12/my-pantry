const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");
const app = new express();
const port = 8000;

const connectionString = process.env.MONGO_CONNECTION_STRING;

const mongoose = require("mongoose");
mongoose.connect(connectionString);

const Pantry = mongoose.model("Pantry", {
  name: String,
});

const message = process.env.TESTMESSAGE;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(message);
});

app.get("/pantries/:id", async (req, res) => {
  const id = req.params.id;
  const pantry = await Pantry.findById(id);
  res.json(pantry);
});

app.post("/pantries", async (req, res) => {
  const name = req.body.name;
  const pantry = new Pantry({ name: name });
  const result = await pantry.save();
  res.send(result);
});

const User = mongoose.model("User", {
  name: String,
});

app.get("/", (req, res) => {
  res.send(message);
});

app.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.json(user);
});

app.get("/mypantry", (req, res) => {
  res.send("My pantry");
});

// POST /user (creates new user)
app.post("/user", async (req, res) => {
  const name = req.body.name;
  const user = new User({ name: name });
  const result = await user.save();
  res.send(result);
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
