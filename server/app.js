require('dotenv').config()
const Koa = require('koa')

const app = new Koa()

const db = require('./db')

// Middlewares



// error handling
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
})

const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

const cors = require('koa2-cors')
app.use(cors({
  origin: '*'
}))

const logger = require('koa-logger')
app.use(logger())

const compress = require('koa-compress')
app.use(compress())

const router = require('./controllers/index')
app.use(router())

app.listen(process.env.PORT)
console.log('Started server on port ' + process.env.PORT)