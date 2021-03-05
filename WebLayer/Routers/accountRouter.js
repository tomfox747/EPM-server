const express = require('express')
const router = express.Router();
const accountService = require('../Services/accountService')
const {allowedErrors} = require('../Utils/ErrorHandlers')
const {GenerateErrorLog,GenerateRouteLog,GenerateEventLog} = require('../logging/loggerDefinition')

router.post('/create', async (req,res) =>{
    try{
        GenerateRouteLog(req.originalUrl, req.body)
        let userData = req.body
        let response = await accountService.createAccount(userData)
        res.send(response)
    }catch(e){
        GenerateErrorLog(req.originalUrl, e.message, e.code, 'route call', req.body)
        if(allowedErrors.includes(e.code)){
            throw new CustomError(e.code, e.type, e.message)
        }
        res.send(new Error("Account Creation Error", 500, "Error occured creating your account"))   
    }
})

router.post('/login', async (req,res) =>{
    try{
        GenerateRouteLog(req.originalUrl, req.body)
        let userName = req.body.userName
        let password = req.body.password
        let response = await accountService.login(userName, password)
        res.send(response)
    }catch(e){
        GenerateErrorLog(req.originalUrl,e.message,e.code,'route call',req.body)
        if(allowedErrors.includes(e.code)){
            throw new CustomError(e.code, e.type, e.message)
        }
        res.send(new Error("Login Error", 500, "Error occured whilst loggin into your account"))   
    }
})

module.exports = router