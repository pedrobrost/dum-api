const mongoose = require("mongoose");
const httpStatus = require("http-status");
const { omit } = require("lodash");
const APIError = require("../utils/APIError");

const CustomerSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    phone: String,
  },
  {
    timestamps: true,
  }
);

CustomerSchema.statics = {
  async patch(id, body) {
    try {
      let customer;
      if (mongoose.Types.ObjectId.isValid(id)) {
        customer = await this.findByIdAndUpdate(
          id,
          { $set: omit(body, ["_id"]) },
          { new: true, runValidators: true }
        ).exec();
      }
      if (customer) return customer;
      throw new APIError({
        message: "Customer not found",
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },
};

module.exports = mongoose.model("Customer", CustomerSchema);
