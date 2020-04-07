const express = require("express");
const validate = require("express-validation");
const controller = require("../controllers/product.controller");
const { create, update } = require("../validations/product.validation");

const router = express.Router();

router
  .route("/")
  .get(controller.list)
  .post(validate(create), controller.create);

router.route("/:id").patch(validate(update), controller.patch);

module.exports = router;
