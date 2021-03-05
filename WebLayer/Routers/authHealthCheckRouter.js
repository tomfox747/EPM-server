const { response } = require('express')
const express = require('express')
const router = express.Router()
const {allowedErrors, CustomError} = require('../Utils/ErrorHandlers')
const {GET,POST} = require('../Services/HttpService')

router.get('/', async (req,res) =>{
    try{
        const token = req.headers.authorization
        const params = {
            headers:{
                'Authorization':token
            }
        }
        const response = await GET('http://localhost:8001/authHealthCheck', params)
        if(response.status !== 200){
            throw new Error("Unauthorized", 401);
        }
        res.send(response)
    }catch(e){
        GenerateErrorLog(req.originalUrl, e.message, e.code, 'route call', req.body)
        if(allowedErrors.includes(e.code)){
            res.status(e.code).send("e.message")
        }
        res.status(500).send("authentication test error")
    }
})

module.exports = router