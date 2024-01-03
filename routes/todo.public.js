const express = require("express");
const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    req.responseSuccess(res, {});
  } catch (error) {
    req.responseError(res, error);
  }
});

module.exports = router;
