const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

module.exports = {
  create: {
    body: {
      customer: Joi.objectId().required(),
      description: Joi.string().allow(""),
      address: Joi.string().required(),
      products: Joi.array().items(
        Joi.object().keys({
          product: Joi.objectId().required(),
          price: Joi.number().required(),
          amount: Joi.number().required(),
        })
      ),
    },
  },
  update: {
    body: {
      customer: Joi.objectId().required(),
      description: Joi.string().allow(""),
      address: Joi.string().required(),
      products: Joi.array().items(
        Joi.object().keys({
          product: Joi.objectId().required(),
          price: Joi.number().required(),
          amount: Joi.number().required(),
        })
      ),
    },
    params: {
      id: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    },
  },
};
