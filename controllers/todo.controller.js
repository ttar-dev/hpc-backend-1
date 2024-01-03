const { validationResult } = require("express-validator");
const todoServices = require("../services/todo");

module.exports = {
  createTodoList: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw { statusCode: 400, message: errors.array() };
      }

      todoServices.assignTodoList(req.body);

      req.responseSuccess(res, {
        statusCode: 201,
        message: "created.",
        data: lists,
      });
    } catch (error) {
      req.responseError(res, error);
    }
  },
};
