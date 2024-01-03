module.exports = {
  handleError: (res, { statusCode, message }) => {
    res
      .status(statusCode || 400)
      .json({
        statusCode: statusCode || 400,
        message,
      })
      .end();
  },
  handleSuccess: (res, { statusCode, message, data }) => {
    return res
      .status(statusCode || 200)
      .json({
        statusCode: statusCode || 200,
        message,
        data,
      })
      .end();
  },
};
