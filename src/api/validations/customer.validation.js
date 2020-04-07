const Joi = require("joi");

module.exports = {
  create: {
    body: {
      name: Joi.string().required(),
      address: Joi.string().required(),
    },
  },
  update: {
    body: {
      name: Joi.string(),
      address: Joi.string(),
    },
    params: {
      id: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    },
  },
};
