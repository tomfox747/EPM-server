const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')

const healthCheckRouter = require('./Routers/healthCheckRouter')
const accountRouter = require('./Routers/accountRouter')
const authHealthCheckRouter = require('./Routers/authHealthCheckRouter')
const viewsRouter = require('./Routers/viewsRouter')

app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())

app.use('/healthCheck', healthCheckRouter)
app.use('/account', accountRouter)
app.use('/authHealthCheck', authHealthCheckRouter)

app.use('/page', viewsRouter)

//Login Page Route
app.get('/', (req,res) =>{
    res.sendFile('Login.html', { root: path.join(__dirname, './views') });
})

module.exports = app