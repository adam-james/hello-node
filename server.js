"use strict";
const app = require("express")();
const port = process.env.PORT || 3000;

app.get("/hello", function sayHello(req, res) {
  res.json({ message: "Hello, world!" });
});

app.get("/hello/:name", function greetName(req, res) {
  res.json({ message: `Hello, ${req.params.name}!` });
});

app.listen(port);
console.log(`App listening on port: ${port}`);

