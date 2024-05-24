const express = require("express");

//instance of router to make the routes
const router = express.Router();
const itemsController = require("../controller/items");

//localhost:4000/todos/items
router.get("/items", itemsController.getTodos);
router.post("/item", itemsController.createTodo);
module.exports = router;
