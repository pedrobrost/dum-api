// import .env variables
require("dotenv-safe").config({
  allowEmptyValues: true,
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  password: process.env.ADMIN_PASSWORD,
  mongo: {
    uri: `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mongodb/${process.env.DB_NAME}`,
  },
  logs: process.env.NODE_ENV === "production" ? "combined" : "dev",
};
