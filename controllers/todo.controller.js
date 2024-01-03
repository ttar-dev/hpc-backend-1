const { validationResult } = require("express-validator");
const todoServices = require("../services/todo");

module.exports = {
  assignTodoList: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw { statusCode: 400, message: errors.array() };
      }

      const lists = todoServices.assignTodoList(req.body);

      req.responseSuccess(res, {
        statusCode: 201,
        message: "created.",
        data: lists,
      });
    } catch (error) {
      req.responseError(res, error);
    }
  },
  getTodos: async (req, res) => {
    try {
      req.responseSuccess(res, { data: todoServices.getTodos() });
    } catch (error) {
      req.responseError(res, error);
    }
  },
  getTodoById: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw { statusCode: 400, message: errors.array() };
      }

      const list = todoServices.getTodoById(parseInt(req.params.id));

      req.responseSuccess(res, { data: list || {} });
    } catch (error) {
      req.responseError(res, error);
    }
  },
  updateTodoById: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw { statusCode: 400, message: errors.array() };
      }

      const list = todoServices.updateTodoById(
        parseInt(req.params.id),
        req.body
      );

      req.responseSuccess(res, { data: list || {}, message: "updated." });
    } catch (error) {
      req.responseError(res, error);
    }
  },
  removeTodoById: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw { statusCode: 400, message: errors.array() };
      }

      const list = todoServices.removeTodoById(parseInt(req.params.id));

      req.responseSuccess(res, { data: list || {}, message: "deleted." });
    } catch (error) {
      req.responseError(res, error);
    }
  },
};
