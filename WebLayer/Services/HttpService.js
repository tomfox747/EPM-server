const axios = require('axios')

//Configured to make a HTTP Get request to the server
const GET = async (url,params) =>{
    try{
        return await axios.get(url,params)
        .then((res) =>{
            return res.data
        })
        .catch((err) =>{
            throw new Error(err)
        })
    }catch(e){
        console.log(e)
        throw new Error(e)
    }
}

//Congigured to make a HTTP Post request to the inner server
const POST = ( async (url,params,body) =>{
    let responseObject = {
        statusCode:null,
        data:null
    }
    await axios.post(url,body)
    .then((res) =>{
        responseObject.statusCode = res.status
        responseObject.data = res.data 
    })
    .catch(e =>{
        throw new Error(e)
    })

    return responseObject
})

module.exports = {
    GET,
    POST
}