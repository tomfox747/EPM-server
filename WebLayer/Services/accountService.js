const {GET,POST} = require('./HttpService')
const {CustomError, allowedErrors}= require('../Utils/ErrorHandlers')


const createAccount = async (userData) =>{
    //call end point from the api server
    try{
        let errorTest = new Error()
        errorTest.status = 400
        errorTest.message = 'bad request'
        throw new Error(errorTest)

        if(!userData.userName){
            throw new CustomError(400,"Bad request", "No username was supplied")
        }
        if(!userData.password){
            throw new CustomError(400,"Bad request", "No password was supplied")
        }

        let response = await POST('http://localhost:8001/account/create',null,userData)
        return response
    }catch(e){
        if (allowedErrors.includes(e.code)){
            throw new CustomError(e.code, e.type, e.message)
        }
        throw new CustomError(500,'internal server error','An unknown error occured')
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
        if(allowedErrors.includes(e.code)){
            throw new CustomError(e.code, e.type, e.message)
        }
        throw new CustomError(500,'internal server error','an unknown error occured')
    }
}

module.exports = {
    createAccount,
    login
}