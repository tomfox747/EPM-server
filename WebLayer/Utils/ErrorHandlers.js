class ReturnError{
    constructor(type, code, message){
        this.name = type,
        this.code = code,
        this.message = message
    }
}

class DevError{
    constructor(type, code, message, file, functionName, data){
        this.name = type,
        this.code = code,
        this.message = message,
        this.file = file,
        this.functionName = functionName
        this.data = data
    }
}

module.exports = {
    ReturnError,
    DevError
}