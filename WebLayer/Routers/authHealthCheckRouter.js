const { response } = require('express')
const express = require('express')
const router = express.Router()
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
        res.send(response)
    }catch(e){
        console.log(e)
        res.status(500).send("authentication test error")
    }
})

module.exports = router