// Define a JavaScript function called logMsg() that can be used to log an error message for any 
// object that contains the property errMsg. 

const logger = {
    logMsg: function () {
        if(this.hasOwnProperty('errMsg')) {
            console.log(this.errMsg)
        }
    }
}

logTest = {
    errMsg: "This is error"
}

// function logMsg(obj) {
//     if(obj.hasOwnProperty('errMsg')) {
//         console.log(obj.errMsg)
//     }
// }

logger.logMsg.call(logTest)