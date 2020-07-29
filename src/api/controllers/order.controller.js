const httpStatus = require("http-status");
const Order = require("../models/order.model");

exports.create = async (req, res, next) => {
  try {
    const order = new Order(req.body);
    const savedOrder = await order.save();
    res.status(httpStatus.CREATED);
    res.json(savedOrder);
  } catch (error) {
    next(error);
  }
};

exports.patch = async (req, res, next) => {
  try {
    const order = await Order.patch(req.params.id, req.body);
    res.json(order);
  } catch (error) {
    next(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("products.product")
      .populate("customer");
    res.json(order);
  } catch (error) {
    next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    const orders = await Order.find()
      .populate("products.product")
      .populate("customer");
    res.json(orders);
  } catch (error) {
    next(error);
  }
};
