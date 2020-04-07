const express = require("express");
const validate = require("express-validation");
const controller = require("../controllers/customer.controller");
const { create, update } = require("../validations/customer.validation");

const router = express.Router();

router
  .route("/")
  .get(controller.list)
  .post(validate(create), controller.create);

router.route("/:id").patch(validate(update), controller.patch);

module.exports = router;
