const express = require("express");
const router = express.Router();
const { body, param } = require("express-validator");
const todoCtl = require("../controllers/todo.controller");

router.route("/").get(todoCtl.getTodos);

router
  .route("/:id")
  .get(
    [param("id").notEmpty().withMessage("ID is required")],
    todoCtl.getTodoById
  );

router
  .route("/:id")
  .put(
    [
      param("id").notEmpty().withMessage("ID is required"),
      body("desc").notEmpty().withMessage("Description is required"),
    ],
    todoCtl.updateTodoById
  );

router
  .route("/:id")
  .delete(
    [param("id").notEmpty().withMessage("ID is required")],
    todoCtl.removeTodoById
  );

router
  .route("/")
  .post(
    [body("desc").notEmpty().withMessage("Description is required")],
    todoCtl.assignTodoList
  );

module.exports = router;
