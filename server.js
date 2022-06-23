const express = require("express");
const app = new express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/cheatsheet", (req, res) => {
  let path = __dirname + "/cheat-sheet.md";
  console.log(path);
  res.sendFile(path);
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
  res.send("catsss");
});

<style>
body background-color: powderblue;
</style>