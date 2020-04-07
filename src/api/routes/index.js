const express = require("express");
const productRoutes = require("./product.route");
const customerRoutes = require("./customer.route");
const orderRoutes = require("./order.route");

const router = express.Router();

router.get("/status", (req, res) => res.send("OK"));

router.use("/products", productRoutes);
router.use("/customers", customerRoutes);
router.use("/orders", orderRoutes);

module.exports = router;
