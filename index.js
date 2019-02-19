const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://mongo:27017/testedb", { useNewUrlParser: true })
  .then(res => {
    console.log("MongoDB connected");
  })
  .catch(err => {
    console.log("Error in connection");
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = 8000;

app.listen(port, () => {
  console.log("Server running on port 8000");
});
