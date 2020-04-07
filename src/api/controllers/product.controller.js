const httpStatus = require("http-status");
const Product = require("../models/product.model");

exports.create = async (req, res, next) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(httpStatus.CREATED);
    res.json(savedProduct);
  } catch (error) {
    next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

exports.patch = async (req, res, next) => {
  try {
    const product = await Product.patch(req.params.id, req.body);
    res.json(product);
  } catch (error) {
    next(error);
  }
};
