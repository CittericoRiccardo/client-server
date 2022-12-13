console.log("ciao bel bimbo");

var timestamp = require("timestamp");
const timestamp = require("express");

console.log(timestamp());
console.log(timestamp());
console.log(timestamp());
console.log(timestamp());
console.log(timestamp());
console.log(timestamp());
console.log(timestamp());
console.log(timestamp());
console.log(timestamp());
console.log(timestamp());

const express = require("express");
const { text } = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/uppercase", function (req, res) {
  console.log(req.query.nome);
  var text = "ciao";
  res.send(text.toUpperCase());
});
app.get("/somma", function (req, res) {
  console.log(req.query.nome);
  console.log(req.query.nome);
  var num1 = req.query.a;
  var num2 = req.query.b;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  var somma = num1 + num2;
  res.send("fa:" + somma);
});
app.listen(3000);
