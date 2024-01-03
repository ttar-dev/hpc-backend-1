const express = require("express");
const router = express.Router();

router.route("/lists").get(async (req, res) => {
  try {
    req.responseSuccess(res, {});
  } catch (error) {
    req.responseError(res, error);
  }
});

router.route("/list/:id").get(async (req, res) => {
  try {
    req.responseSuccess(res, {});
  } catch (error) {
    req.responseError(res, error);
  }
});

router.route("/list/:id").put(async (req, res) => {
  try {
    req.responseSuccess(res, {});
  } catch (error) {
    req.responseError(res, error);
  }
});

router.route("/list/:id").delete(async (req, res) => {
  try {
    req.responseSuccess(res, {});
  } catch (error) {
    req.responseError(res, error);
  }
});

router.route("/list").post(async (req, res) => {
  try {
    req.responseSuccess(res, {});
  } catch (error) {
    req.responseError(res, error);
  }
});

module.exports = router;
