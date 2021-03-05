const passport = require('passport')
const jwt = require('jsonwebtoken')

const dummyUsers = require('../../DummyData/users.json').users

//If the user already exists, don't create the account. Otherwise create the account
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

//If Dummy users contains an entry of the passed user data. A token is created and send back to the user
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
        throw new Error(e)
    }
}

module.exports = {
    createAccount,
    login
}