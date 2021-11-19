const path = require("path");
const express = require("express");
const app = express();

const port = 3000;

// run html,css and js file using express
console.log(path.join(__dirname, "../public"));
const staticpath = path.join(__dirname, "../public");
app.use(express.static(staticpath));
app.listen(port, () => {
  console.log(`listen to port ${port}`);
});
