const express = require('express')
const router = express.Router()

router.get('/',(req,res) =>{
    try{
        res.send('Health check successful')
    }catch(e){
        res.status(500).send('Health check error')
    }
})

module.exports = router