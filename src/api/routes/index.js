const express = require("express");
const productRoutes = require("./product.route");
const customerRoutes = require("./customer.route");

const router = express.Router();

router.get("/status", (req, res) => res.send("OK"));

router.use("/products", productRoutes);
router.use("/customers", customerRoutes);

module.exports = router;
