const {GET,POST} = require('./HttpService')
const {CustomError, allowedErrors}= require('../Utils/ErrorHandlers')
const {GenerateErrorLog} = require('../logging/loggerDefinition')

const createAccount = async (userData) =>{
    try{
        if(!userData.userName){
            throw new CustomError(400,"Bad request", "No username was supplied")
        }
        if(!userData.password){
            throw new CustomError(400,"Bad request", "No password was supplied")
        }

        let response = await POST('http://localhost:8001/account/create',null,userData)
        return response
    }catch(e){
        throw new Error(e)
    }
}

const login = async (userName, password) =>{
    try{
        if(!userName){
            throw new CustomError(400,'Bad request', 'No username was supplied')
        }
        if(!password){
            throw new CustomError(400, 'Bad request','No password was supplied')
        }

        let userData ={
            userName:userName,
            password:password
        }
        let response = await POST('http://localhost:8001/account/login',null,userData)
        return response
    }catch(e){
        throw new Error(e)
    }
}

module.exports = {
    createAccount,
    login
}