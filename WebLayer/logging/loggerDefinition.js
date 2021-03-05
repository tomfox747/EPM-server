const winston = require('winston')
const dayjs = require('dayjs')

const errorLogger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: 'errors.log', 
            level: 'error' 
        })
    ]
})

const eventLogger = winston.createLogger({
    transports: [
        new winston.transports.File({ 
            filename: 'events.log',
            level:'info' 
        })
    ]
})

const routeLogger = winston.createLogger({
    transports:[
        new winston.transports.File({
            filename:'requests.log', 
            level:'http'
        })
    ]
})

class ErrorLogSchema{
    constructor(route,errorMessage,errorCode,func,data){
        this.route = route,
        this.errorMessage = errorMessage,
        this.errorCode = errorCode,
        this.function = func,
        this.data = data
    }
}
class EventLogSchema{
    constructor(route, func, message, data){
        this.route = route,
        this.function = func,
        this.message = message,
        this.data = data
    }
}
class RouteLogSchema{
    constructor(route, data){
        this.route=route,
        this.data = data
    }
}

const GenerateErrorLog = (route, errorMessage, functionName, data) =>{
    if(!route || !errorMessage || !functionName){
        return new Error("Could not create error log")
    }
    dataString = JSON.stringify(data)
    const logData = new ErrorLogSchema(route,errorMessage,functionName,dataString)
    errorLogger.log({
        level:"error",
        message:JSON.stringify(logData)
    });
}
const GenerateEventLog = (route, functionName, message, data) =>{
    if(!route || !message || !functionName){
        return new Error("Could not create event log")
    }
    dataString = JSON.stringify(data)
    const logData = new EventLogSchema(route, functionName, message, dataString)
    eventLogger.log({
        level:'info',
        message:JSON.stringify(logData)
    })
}
const GenerateRouteLog = (route, data) =>{
    if(!route){
        return new Error("Could not create route log")
    }
    dataString = JSON.stringify(data)
    const logData = new RouteLogSchema(route, dataString)
    routeLogger.log({
        level:'info',
        message:JSON.stringify(logData)
    })
}

module.exports = {
    GenerateErrorLog,
    GenerateEventLog,
    GenerateRouteLog
}