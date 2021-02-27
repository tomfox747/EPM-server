const express = require('express')
const router = express.Router()
const {GenerateRouteLog,GenerateErrorLog} = require('../logging/loggerDefinition') 

router.get('/',(req,res) =>{
    console.log(req.headers.authorization)
    try{
        res.send('Authenticated health check successful')
    }catch(e){
        res.status(500).send("internal server error")
    }
})

module.exports = router