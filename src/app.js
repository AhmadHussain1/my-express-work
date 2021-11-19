const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello from ahmad express server");
});
app.get("/about", (req, res) => {
    res.send("hello from ahmad express server.this is about page");
  });

app.listen(8000, () => {
  console.log("listening the port at 8000");
});
