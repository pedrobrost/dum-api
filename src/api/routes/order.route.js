const express = require("express");
const validate = require("express-validation");
const controller = require("../controllers/order.controller");
const { create } = require("../validations/order.validation");

const router = express.Router();

router
  .route("/")
  .get(controller.list)
  .post(validate(create), controller.create);

module.exports = router;
