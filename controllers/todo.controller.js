const { validationResult } = require("express-validator");

let lists = [];

module.exports = {
  createTodoList: async (req, res) => {
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
  },
};
