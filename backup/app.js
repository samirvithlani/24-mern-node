const fs = require("fs") //file system module

console.log("app.js file...")
// const userName = require("./user")
// const userAge = require("./user")
// console.log(userName)
// console.log(userAge)

// const user = require("./user")
// console.log(user)
// user.displayUserData(100)


//get
//post
//put
//delete
//patch
//localhost:3000/test
app.get("/test",(req,res)=>{
    console.log("test api called");
    //res.send("test api called..")
    res.json({
        message:"test api called",
    })
})

const user = {
    id:101,
    name:"amit",
    age:23,
    email:"amit@gmail.com"
}
app.get("/user",(req,res)=>{

    res.json({
        message:"user api called",
        data:user
    })
})

var users = [
    {
        id:101,
        name:"amit",
        age:23,
        email:"amit@gmail.com"
    },
    {
        id:102,
        name:"sumit",
        age:24,
        email:"sumt@gmail.com"
    }
]
app.get("/users",(req,res)=>{

        res.json({
            message:"users api called",
            data:users
        })
})

//localhost:3000/user/101
app.get("/user/:id",(req,res)=>{
    console.log(req.params)
    console.log(req.params.id)
    var foundUser = users.find((user)=>user.id == req.params.id)
    console.log("founduser",foundUser)
    // res.json({
    //     message:"user api called",
    //     user:foundUser
    // })

    if(foundUser!=undefined){
        res.json({
            message:"user api called",
            user:foundUser
        })
    }
    else{
        res.json({
            message:"user not found",
        })
    }
})


const employee = require("./employee")
var emps = employee.getAllEmployees()
console.log(emps)
var semp = employee.findSingleEmployee(102)
console.log(semp)

fs.writeFileSync("employee.json",JSON.stringify(emps))

