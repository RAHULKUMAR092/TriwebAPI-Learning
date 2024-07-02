const {
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo");

const express = require("express");

const router = express.Router();

//
router.post("/", createTodo);
router.get("/", getTodo);
router.put("/", updateTodo);
router.delete("/", deleteTodo); 

// router.get("/", (req, res) => {
//   res.send("GET method called1");
// });

// router.put("/", (req, res) => {
//   res.send("put method called");
// });
// router.delete("/", (req, res) => {
//   res.send("delete method called");
// });

module.exports = router;
