const os = require('os')

user = os.userInfo()

console.log(user)

//method returns uptime in seconds
console.log(`The uptime is ${os.uptime()} seconds.`)

// Object for the os info

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    remainingMem: os.freemem(),
}

console.log(currentOS)