const express = require("express");
const morgan = require("morgan");
const constants = require("./constants");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.listen(constants.port, async function () {
  console.log("Service Started", constants.port);
});
