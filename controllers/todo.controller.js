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
};
