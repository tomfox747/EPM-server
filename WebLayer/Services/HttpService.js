const axios = require('axios')

const GET = async (url,params) =>{
    try{
        await axios.get(url,params)
        .then((res) =>{
            return res.data
        })
        .catch((err) =>{
            throw new Error(err)
        })
    }catch(e){
        console.log(e)
        throw new Error("http request error")
    }
}

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
        throw new Error('request error')
    })

    return responseObject
})

module.exports = {
    GET,
    POST
}