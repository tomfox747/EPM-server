const { response } = require('express')
const express = require('express')
const router = express.Router()
const path= require('path');
const { render } = require('../app');
const {GET} = require('../Services/HttpService');
const {allowedErrors, CustomError} = require('../Utils/ErrorHandlers')
const {GenerateErrorLog} = require('../logging/loggerDefinition')

//TODO Refactor to clear logic away from each endpoint

//Home Page Route
router.get('/home', async (req,res) =>{
    try{
        const token = 'Bearer ' + req.cookies.authToken;
        //const token = req.headers.authorization;
        const params={
            headers:{
                'Authorization':token
            }
        }
        let view = await GET('http://localhost:8001/views/home',params)
        res.send(view);
    }catch(e){
        GenerateErrorLog(req.originalUrl, e.message, e.code, 'route call', req.body)
        if(e.code === 401){
            res.status(e.code).sendFile('Unauthorized.html', { root: path.join(__dirname, '../views') })
        }
        if(allowedErrors.includes(e.code)){
            res.status(e.code).sendFile('Error.html', { root: path.join(__dirname, '../views') })
        }
        res.status(500).sendFile('Error.html', { root: path.join(__dirname, '../views') })
    }
})

module.exports = router