
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");
const logger = require("koa-logger");
const compress = require("koa-compress");
import { config } from "./config";
import { combinedRouter } from "./controllers/index"
const app = new Koa()

// const db = require('./db')

// Middlewares



// error handling
app.use(async (ctx: any, next: any) => {
  try {
    await next() 
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
})

app.use(bodyParser())

app.use(cors({
  origin: '*'
}))

app.use(logger())

app.use(compress())

app.use(combinedRouter())

app.listen(config.port)
console.log('Started server on port ' + config.port)