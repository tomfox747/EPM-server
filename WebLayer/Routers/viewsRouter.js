const { response } = require('express')
const express = require('express')
const router = express.Router()
const path= require('path')


//Home Page Route
router.get('/home', (req,res) =>{
    res.sendFile('Home.html', { root: path.join(__dirname, '../views') });
})

//Login Page Route
router.get('/login', (req,res) =>{
    res.sendFile('Login.html', { root: path.join(__dirname, '../views') });
})

module.exports = router