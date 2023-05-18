//Common JS, every file is a module (by default)
//Modules - Encapsulated code (only share minimum)
const names = require('./names')
const sayHi = require('./utils')


sayHi("Gilbert")
sayHi(names.hitesh)
sayHi(names.ayush)
