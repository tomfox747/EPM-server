class CustomError extends Error{
    constructor(code, type, message){
        this.code = code,
        this.type = type,
        this.message = message
    }
}

const allowedErrors = [400,401,403,500]

module.exports = {
    CustomError,
    allowedErrors
}