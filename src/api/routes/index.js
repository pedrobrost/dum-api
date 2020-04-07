const express = require("express");
const productRoutes = require("./product.route");

const router = express.Router();

router.get("/status", (req, res) => res.send("OK"));

router.use("/products", productRoutes);

module.exports = router;
