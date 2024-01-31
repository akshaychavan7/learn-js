// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 

logger = {
    logMsg: function() {
        if(this.hasOwnProperty('errMsg')) {
            console.log(`Error message: ${this.errMsg}`);
        }
    }
}

logObj1 = {
    errMsg: 'This is error from logger object 1'
}

logObj2 = {
    errMsg: 'This is error from logger object 2'
}

logger.logMsg.call(logObj1)
logger.logMsg.call(logObj2)