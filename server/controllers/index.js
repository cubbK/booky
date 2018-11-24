const combineRouters = require("koa-combine-routers");

const combinedRouter = combineRouters(
  require("./googleUser"),
  require("./user")
);

module.exports = combinedRouter;
