const Joi = require("joi");

module.exports = {
  create: {
    body: {
      name: Joi.string().required(),
      price: Joi.number().required(),
    },
  },
  update: {
    body: {
      name: Joi.string(),
      price: Joi.number(),
    },
    params: {
      id: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    },
  },
};
