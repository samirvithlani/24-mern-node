sort 

db.employees.aggregate([{$sort:{firstName:1}}])
db.employees.aggregate([{$match:{gender:"male"}},{$sort:{firstName:1}}])
db.employees.aggregate([{$group:{_id:{deptName:"$department.name"},totalSalary:{$sum:"$salary"}}}])

sort by salary
db.employees.aggregate([{$group:{_id:{deptName:"$department.name"},totalSalary:{$sum:"$salary"}}},{$sort:{totalSalary:1}}])
db.employees.aggregate([{$group:{_id:{deptName:"$department.name"},totalSalary:{$sum:"$salary"}}},{$sort:{_id:1}}])

db.orders.insertMany([
  {
    "_id": 1,
    "product": "Laptop",
    "price": 1200,
    "quantity": 2,
    "customer": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "date": "2024-09-28"
  },
  {
    "_id": 2,
    "product": "Smartphone",
    "price": 800,
    "quantity": 1,
    "customer": {
      "firstName": "Jane",
      "lastName": "Smith"
    },
    "date": "2024-09-27"
  },
  {
    "_id": 3,
    "product": "Headphones",
    "price": 150,
    "quantity": 4,
    "customer": {
      "firstName": "Alice",
      "lastName": "Johnson"
    },
    "date": "2024-09-26"
  },
  {
    "_id": 4,
    "product": "Monitor",
    "price": 300,
    "quantity": 2,
    "customer": {
      "firstName": "Robert",
      "lastName": "Williams"
    },
    "date": "2024-09-25"
  },
  {
    "_id": 5,
    "product": "Keyboard",
    "price": 100,
    "quantity": 3,
    "customer": {
      "firstName": "Emily",
      "lastName": "Davis"
    },
    "date": "2024-09-24"
  },
  {
    "_id": 6,
    "product": "Mouse",
    "price": 50,
    "quantity": 5,
    "customer": {
      "firstName": "Michael",
      "lastName": "Miller"
    },
    "date": "2024-09-23"
  }
])


get year from date

db.orders.aggregate([{$project:{year:{$year:{$dateFromString:{dateString:"$date"}}}}}])


$project
db.orders.aggregate([{$project:{price:0,quantity:0}}])

db.orders.aggregate([{$project:{_id:0,item:"$product"}}])
db.orders.aggregate([{$project:{_id:0,item:"$product",total:{$multiply:["$price","$quantity"]}}}])
db.orders.aggregate([{$project:{product:1,priceAsString:{$toString:"$price"}}}])
//prodct firstname+lastname
db.orders.aggregate([{$project:{_id:0,product:1,fullName:{$concat:["$customer.firstName"," ","$customer.lastName"]}}}])

//get year from date
//year 
//month
//day
db.orders.aggregate([{$project:{year:{$year:{$dateFromString:{dateString:"$date"}}},month:{$month:{$dateFromString:{dateString:"$date"}}}}}])

//double price
