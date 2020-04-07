const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const httpStatus = require("http-status");
const APIError = require("../utils/APIError");
const { password, jwtSecret } = require("../../config/vars");

function getAuthError() {
  return new APIError({
    message: "Authentication error",
    status: httpStatus.UNAUTHORIZED,
  });
}

async function login(req, res, next) {
  const match = await bcrypt.compare(req.body.password, password);

  if (match) {
    const token = jwt.sign(
      {
        username: "admin",
        exp: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60,
      },
      jwtSecret
    );
    return res.json({ jwt: token });
  }
  return next(getAuthError());
}

module.exports = { login };
