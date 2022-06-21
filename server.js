const express = require("express");
const app = new express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/mypantry", (req, res) => {
  res.send("My pantry");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
