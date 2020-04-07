const mongoose = require("mongoose");
const httpStatus = require("http-status");
const { omit } = require("lodash");
const APIError = require("../utils/APIError");

const OrderSchema = new mongoose.Schema(
  {
    address: String,
    description: String,
    customer: { type: mongoose.SchemaTypes.ObjectId, ref: "Customer" },
    products: [
      {
        product: { type: mongoose.SchemaTypes.ObjectId, ref: "Product" },
        price: Number,
        amount: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

OrderSchema.statics = {};

module.exports = mongoose.model("Order", OrderSchema);
