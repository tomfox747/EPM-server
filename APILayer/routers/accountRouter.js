const express = require('express')
const router = express.Router()
const accountService = require('../services/accountService')
const {GenerateRouteLog, GenerateErrorLog} = require('../logging/loggerDefinition')

router.post('/login', async (req, res) => {
    try{
        const userName = req.body.userName
        const password = req.body.password
        const response = await accountService.login(userName, password)
        res.send(response)
    }catch(e){
        GenerateErrorLog(req.originalUrl, e.message, 'login route', req.body)
        res.status(500).send('Error logging into account')
    }
});

router.post('/create', async (req,res) =>{
    try{
        GenerateRouteLog(req.originalUrl, req.body)
        let userData = req.body
        let response = await accountService.createAccount(userData)
        res.send("account creation was successful")
    }catch(e){
        GenerateErrorLog(req.originalUrl,e.message,'/createAccount',req.body)
        res.status(500).send("error creating the account")
    }
})

module.exports = router