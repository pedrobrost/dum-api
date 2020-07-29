const express = require("express");
const validate = require("express-validation");
const controller = require("../controllers/order.controller");
const { create, update } = require("../validations/order.validation");

const router = express.Router();

router
  .route("/")
  .get(controller.list)
  .post(validate(create), controller.create);

router
  .route("/:id")
  .get(controller.get)
  .patch(validate(update), controller.patch);

module.exports = router;
