const asyncHandler = require("express-async-handler");
const Todo = require("../model/TodoModel");

//@desc GET todos
//@route GET /api/todos
//@access Private
const getAllTodos = asyncHandler(async (req, res) => {
  // console.log(req.body)
  const todos = await Todo.find();
  res.status(200).json(todos);
  //   res.status(200).json({ message: "Get all todos" });
});

//@desc POST todo
//@route POST /api/todos/
//@access Private
const createTodo = asyncHandler(async (req, res) => {
  // console.log(`the request body is :`, req.body);
  const { activityType, date, duration, description,fname,lname,contact,email,image,age } = req.body;
  if (!activityType || !duration || !date || !description || !fname|| !lname|| !contact|| !email) {
    // res.status(400).json({message:"please add a text"})
    res.status(400);
    throw new Error("all field are mandatory");
  }
  const todo = await Todo.create({
    activityType: activityType,
    date: date,
    duration: duration,
    description: description,
    fname:fname,
    lname:lname,
    contact:contact,
    email:email,
    image:image,
    age:age,
  });
  res.status(200).json(todo);
  // res.status(200).json({ message: "create a todo" });
});

//@desc GET todo
//@route GET /api/todos/:id
//@access Private
const getTodo = asyncHandler(async (req, res) => {
  //   const { id } = req.params;
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(404);
    throw new Error("Todo not found");
  }
  res.status(200).json(todo);
  // res.status(200).json({ message: `Get a todo id:${req.params.id}` });
});

//@desc UPDATE todo
//@route PUT /api/todos/:id
//@access Private
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(404);
    throw new Error("Todo not found");
  }
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTodo);
  // res.status(200).json({ message: `update a todo id:${req.params.id}` });
});

//@desc DELETE todo
//@route DELETE /api/todos/:id
//@access Private
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(404);
    throw new Error("Todo not found");
  }

  await Todo.findByIdAndDelete(req.params.id);
  //   res.status(200).json(todo);
  res.status(200).json({ id: req.params.id });
  // res.status(200).json({ message: `delete a todo id:${req.params.id}` });
});

//@desc UPDATE in a todo
//@route PATCH /api/todos/:id
//@access Private
const patchTodo = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `update by patch a todo id:${req.params.id}` });
});

module.exports = {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  patchTodo,
};
