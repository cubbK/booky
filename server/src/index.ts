import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import * as cors from "koa2-cors";
import * as logger from "koa-logger";
import * as compress from "koa-compress";

import { config } from "./config";
import { combinedRouter } from "./controllers/index";
const app = new Koa();

const db = require('./db')

// Middlewares

// error handling
app.use(async (ctx: Koa.Context, next: Function) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit("error", err, ctx);
  }
});

app.use(bodyParser());

app.use(
  cors({
    origin: "*"
  })
);

app.use(logger());

app.use(compress());

app.use(combinedRouter());

app.listen(config.PORT);
console.log("Started server on port " + config.PORT);
