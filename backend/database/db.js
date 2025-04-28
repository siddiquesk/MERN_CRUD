import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const DB_URL=process.env.ATLAS_DB;
export const ConnectDB=async()=>{
try{
  await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true});
}catch(err){
console.log(err);
}
}
