//model <---> class object --> databse users collection bind object return
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    //post...
    //fileds:
})
// mongoose.model("users",userSchema);
// module.exports = userSchema;
//userSchema == db.users
module.exports = mongoose.model("users",userSchema);