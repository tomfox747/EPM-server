const express = require('express')
const router = express.Router()
const {GenerateRouteLog,GenerateErrorLog} = require('../logging/loggerDefinition') 

router.get('/',(req,res) =>{
    try{
        res.send('Authenticated health check successful')
    }catch(e){
        res.status(500)
    }
})

module.exports = router