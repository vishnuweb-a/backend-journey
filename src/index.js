import dotenv from "dotenv"
dotenv.config({
  path:'./.env'
})




import connectDB from "./db/index.js";
connectDB()

/*
import express from "express";
const app = express()
app.use((req, res, next) => {
  res.setHeader("X-Powered-By", "chaiiii"); // sets the header
  next();
});
           


(async () =>{
  try{
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME }`)
      console.log("database subitted successfully .");
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
})*/