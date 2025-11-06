import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express()


(async () =>{
  try{
      await mongoose.connect(`${process.env.MONGODB_UR}/${DB_NAME }`)
      app.on("error",(error) =>{
        console.log("error", error);
        throw error
      })
      app.listen(process.env.PORT,()=>{
        console.log(`app is listening at ${process.env.PORT}`);
      })
  }
  catch(error){
    console.error("error", error)
    throw error
  }
})