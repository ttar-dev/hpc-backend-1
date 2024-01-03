const express = require("express");
const router = express.Router();
const { validationResult, body, param } = require("express-validator");
let lists = [];

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
    async (req, res) => {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          throw { statusCode: 400, message: errors.array() };
        }

        const { desc } = req.body;

        const newList = { id: lists?.length + 1, desc };
        lists.push(newList);

        req.responseSuccess(res, {
          statusCode: 201,
          message: "created.",
          data: lists,
        });
      } catch (error) {
        req.responseError(res, error);
      }
    }
  );

module.exports = router;
