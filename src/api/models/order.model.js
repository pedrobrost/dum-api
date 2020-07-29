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

OrderSchema.statics = {
  async patch(id, body) {
    try {
      let order;
      if (mongoose.Types.ObjectId.isValid(id)) {
        order = await this.findByIdAndUpdate(
          id,
          { $set: omit(body, ["_id"]) },
          { new: true, runValidators: true }
        ).exec();
      }
      if (order) return order;
      throw new APIError({
        message: "Order not found",
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },
};

module.exports = mongoose.model("Order", OrderSchema);
