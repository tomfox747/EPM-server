const { response } = require('express')
const express = require('express')
const router = express.Router()
const {allowedErrors, CustomError} = require('../Utils/ErrorHandlers')
const {GET,POST} = require('../Services/HttpService')

router.get('/', async (req,res) =>{
    try{
        const token = 'Bearer ' + req.cookies.authToken
        //const token = req.headers.authorization
        const params = {
            headers:{
                'Authorization':token
            }
        }
        console.log(params)
        const response = await GET('http://localhost:8001/authHealthCheck', params)
        res.send(response)
    }catch(e){
        console.log(e)
        if(allowedErrors.includes(e.code)){
            res.status(e.code).send("e.message")
        }
        res.status(500).send("authentication test error")
    }
})

module.exports = router