// Entry point
const express = require("express");
const userRoutes = require("./routers/user");
const app = express();

// middleware
app.use((req, res, next) => {
  console.log("I am here");
  next();
});

// user -> user routers xyz.com/user/1
app.use("/user", userRoutes);
// product -> product routers

app.listen(3000);
