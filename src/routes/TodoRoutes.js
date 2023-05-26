const express = require("express");
const {
  getAllTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
  patchTodo,
} = require("../controller/TodoController");

const router = express.Router();

router.route("/")
.get(getAllTodos)
.post(createTodo);

router.route("/:id")
.get(getTodo)
.put(updateTodo)
.delete(deleteTodo)
.patch(patchTodo);

module.exports = router;
