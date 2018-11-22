const combineRouters = require("koa-combine-routers")
import { auth } from "./auth"
export const combinedRouter = combineRouters(
  auth,
  // require("./user")
); 