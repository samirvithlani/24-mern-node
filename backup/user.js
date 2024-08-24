
const chalk = require('chalk')
var userName = "raj"
var userAge = 30
// module.exports = userName
// module.exports = userAge
const displayUserData = (x)=>{

    console.log("user file....display funciton called...",x)
}

module.exports = {
    userName,userAge,displayUserData
}

//console.log(chalk.green("user.js file..."))
//chalk.green("user.js file...")
//module.exports = displayUserData