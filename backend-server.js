const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = new express();
const port = 8000;

const connectionString = process.env.MONGO_CONNECTION_STRING;

const mongoose = require("mongoose");
mongoose.connect(connectionString);

const Pantry = mongoose.model("Pantry", {
  name: String,
});

const message = process.env.TESTMESSAGE;

app.get("/", (req, res) => {
  res.send(message);
});

app.get("/pantries/:id", async (req, res) => {
  const id = req.params.id;
  const pantry = await Pantry.findById(id);
  res.json(pantry);
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
