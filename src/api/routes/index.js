const express = require("express");
const expressJwt = require("express-jwt");
const { jwtSecret } = require("../../config/vars");
const authRoutes = require("./auth.route");
const productRoutes = require("./product.route");
const customerRoutes = require("./customer.route");
const orderRoutes = require("./order.route");

const router = express.Router();

router.get("/status", (req, res) => res.send("OK"));

router.use("/login", authRoutes);

const authRouter = express.Router();
authRouter.use("/products", productRoutes);
authRouter.use("/customers", customerRoutes);
authRouter.use("/orders", orderRoutes);
router.use("/", expressJwt({ secret: jwtSecret }), authRouter);

module.exports = router;
