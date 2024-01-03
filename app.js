const express = require("express");
const morgan = require("morgan");
const constants = require("./constants");
const routes = require("./routes");
const { handleSuccess, handleError } = require("./middleware/response");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  req.responseError = handleError;
  req.responseSuccess = handleSuccess;
  next();
});

app.use("/", routes);

app.listen(constants.port, async function () {
  console.log("Service Started", constants.port);
});
