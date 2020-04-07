const Joi = require("joi");

module.exports = {
  login: {
    body: {
      password: Joi.string().required(),
    },
  },
};
