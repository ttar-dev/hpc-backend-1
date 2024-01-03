const express = require("express");
const router = express.Router();
const { validationResult, body, param } = require("express-validator");
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
    async (req, res) => {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          throw { statusCode: 400, message: errors.array() };
        }
        req.responseSuccess(res, {});
      } catch (error) {
        req.responseError(res, error);
      }
    }
  );

router
  .route("/")
  .post(
    [body("desc").notEmpty().withMessage("Description is required")],
    todoCtl.assignTodoList
  );

module.exports = router;
