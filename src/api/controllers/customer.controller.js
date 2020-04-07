const httpStatus = require("http-status");
const Customer = require("../models/customer.model");

exports.create = async (req, res, next) => {
  try {
    const customer = new Customer(req.body);
    const savedCustomer = await customer.save();
    res.status(httpStatus.CREATED);
    res.json(savedCustomer);
  } catch (error) {
    next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    next(error);
  }
};

exports.patch = async (req, res, next) => {
  try {
    const customer = await Customer.patch(req.params.id, req.body);
    res.json(customer);
  } catch (error) {
    next(error);
  }
};
