import mongoose from "mongoose";


const userSchema=mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  username:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  phone:{
    type:String,
    required:true,
  },
})

const User=mongoose.model("User",userSchema);
export default User;