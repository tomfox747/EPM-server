const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const healthCheckRouter = require('./Routers/healthCheckRouter')
const accountRouter = require('./Routers/accountRouter')
const authHealthCheckRouter = require('./Routers/authHealthCheckRouter')

app.use(bodyParser.json())
app.use(cors())

app.use('/healthCheck', healthCheckRouter)
app.use('/account', accountRouter)
app.use('/authHealthCheck', authHealthCheckRouter)

app.get('/',(req,res) =>{res.send('server successfully contacted')})

module.exports = app