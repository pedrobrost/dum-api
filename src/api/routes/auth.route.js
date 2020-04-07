const express = require("express");
const validate = require("express-validation");
const { login } = require("../validations/auth.validation");
const controller = require("../controllers/auth.controller");

const router = express.Router();

router.route("/").post(validate(login), controller.login);

module.exports = router;
