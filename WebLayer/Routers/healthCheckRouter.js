const express = require('express')
const router = express.Router()
const {ReturnError, DevError} = require('../Utils/ErrorHandlers')
const {GenerateErrorLog,GenerateEventLog,GenerateRouteLog} = require('../logging/loggerDefinition')

router.get('/', (req,res) =>{
    try{
        GenerateRouteLog('healthCheck/',req.params)
        console.log("health check has been hit")
        res.send("Health check successful")
    }catch(e){
        GenerateErrorLog(req.originalUrl, e.message, e.code, '/', req.params)
        throw new ReturnError('HealthCheck error', "error when contacting the server")
    }
})

router.get('/errorCheck', (req,res) =>{
    GenerateRouteLog(req.originalUrl, req.params)
    
    try{
        let devErr = new DevError(
            "Error check error",
            500,
            "error check has been hit",
            "HealthCheckRouter.js",
            "/errorCheck",
            null
        )
        GenerateErrorLog(req.originalUrl,"error",500,'/',req.params)
        res.send('Ok')
    }catch(e){
        let retErr = new ReturnError(
            "Server Error",
            500,
            "Error hit in the errorCheck"
        )
        res.send(retErr)
    }
})

module.exports = router