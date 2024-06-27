const express = require("express");
const path = require("path");
const app = express();

// Below will serve it like http://localhost:3000/venice.jpg
// app.use(express.static(path.join(__dirname, "images")));

// Below will serve like http://localhost:3000/images/venice.jpg
app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/", (req, res) => {
  res.send("From server");
});

app.listen(3000, () => {
  console.log("Server Started");
});
