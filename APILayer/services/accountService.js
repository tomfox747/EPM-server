const {ReturnError, DevError} = require('../utils/Errorhandler')
const passport = require('passport')
const jwt = require('jsonwebtoken')

const dummyUsers = require('../../DummyData/users.json').users

const createAccount = async (userData) =>{
    try{
        const user = dummyUsers.find(element => element.userName === userData.userName)

        if(user){
            throw new Error("A user aleady exists with that username.")
        }

        return "Account created"
    }catch(e){
        throw new Error(e)
    }
}

const login = async(userName, password) =>{
    try{
        const user = dummyUsers.find(element => element.userName === userName)
        if(!user){
            throw new Error('Invalid username')
        }
        if(user.password !== password){
            throw new Error("invalid passowrd")
        }

        const token = jwt.sign({user},'12345')
        return {
            user:user,
            token:token
        }
    }catch(e){
        throw new Error('login Error')
    }
}

module.exports = {
    createAccount,
    login
}