const mongoose = require("mongoose");
const httpStatus = require("http-status");
const { omit } = require("lodash");
const APIError = require("../utils/APIError");

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
  },
  {
    timestamps: true,
  }
);

ProductSchema.statics = {
  async patch(id, body) {
    try {
      let product;
      if (mongoose.Types.ObjectId.isValid(id)) {
        product = await this.findByIdAndUpdate(
          id,
          { $set: omit(body, ["_id"]) },
          { new: true, runValidators: true }
        ).exec();
      }
      if (product) return product;
      throw new APIError({
        message: "Product not found",
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },
};

module.exports = mongoose.model("Product", ProductSchema);
