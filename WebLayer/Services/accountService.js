const {GET,POST} = require('./HttpService')

const createAccount = async (userData) =>{
    //call end point from the api server
    try{
        let response = await POST('http://localhost:8001/account/create',null,userData)
        return response
    }catch(e){
        throw new Error(e)
    }
}

const login = async (userName, password) =>{
    try{
        let userData ={
            userName:userName,
            password:password
        }
        let response = await POST('http://localhost:8001/account/login',null,userData)
        console.log(response)
        return response
    }catch(e){
        console.log(e)
        throw new Error(e)
    }
}

module.exports = {
    createAccount,
    login
}