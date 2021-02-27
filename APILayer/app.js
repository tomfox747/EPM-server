const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const auth = require('./services/authentication')
const healthCheckRouter = require('./routers/healthCheckRouter')
const accountRouter = require('./routers/accountRouter')
const authedHealthCheck = require('./routers/authHealthCheckRouter')
const passport = require('passport')

app.use(bodyParser.json())

app.use('/healthCheck',healthCheckRouter)
app.use('/account', accountRouter)
app.use('/authHealthCheck', passport.authenticate('jwt',{session:false}), authedHealthCheck)

app.get('/',(req,res) =>{res.send("server successfully contacted")})

module.exports = app