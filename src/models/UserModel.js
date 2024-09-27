//model <---> class object --> databse users collection bind object return
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    //post...
    //fileds:
    //rid
    role:{
      type:Schema.Types.ObjectId,
      ref:"Role"
    },
    //3
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    age: {
      type: Number,
    },
    status: {
      type: Boolean,
    },
    password:{
      type:String
    },
    
    hobbies: [
      {
        type: String,
      },
    ],
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    },
  },
  {
    timestamps: true,
  }
);
// mongoose.model("users",userSchema);
// module.exports = userSchema;
//userSchema == db.users
module.exports = mongoose.model("users", userSchema);
