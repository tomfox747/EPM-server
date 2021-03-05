const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/home',(req,res) =>{
    try{
        res.sendFile('home.html', { root: path.join(__dirname, '../views') })
    }catch(e){
        res.status(e.code).send(e.message)
    }
})

module.exports = router