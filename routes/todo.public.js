const express = require("express");
const router = express.Router();
const { validationResult, body, param } = require("express-validator");
const { createTodoList } = require("../controllers/todo.controller");

router.route("/").get(async (req, res) => {
  try {
    req.responseSuccess(res, { data: lists });
  } catch (error) {
    req.responseError(res, error);
  }
});

router
  .route("/:id")
  .get(
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
  .route("/:id")
  .put(
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
    createTodoList
  );

module.exports = router;
