const fs = require("fs") //file system module

console.log("app.js file...")
// const userName = require("./user")
// const userAge = require("./user")
// console.log(userName)
// console.log(userAge)

// const user = require("./user")
// console.log(user)
// user.displayUserData(100)

const employee = require("./employee")
var emps = employee.getAllEmployees()
console.log(emps)
var semp = employee.findSingleEmployee(102)
console.log(semp)

fs.writeFileSync("employee.json",JSON.stringify(emps))

