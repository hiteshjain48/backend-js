//Common JS, every file is a module (by default)
//Modules - Encapsulated code (only share minimum)
const names = require('./names')
const sayHi = require('./utils')

require('./mind-grenade') //every module imported is invoked once without being needed to called explicitly, hence we get output as sum 15 when we import the module mind-grenade.
// sayHi("Gilbert")
// sayHi(names.hitesh)
// sayHi(names.ayush)