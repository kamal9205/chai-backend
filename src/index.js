import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import dotenv from "dotenv";
import express from "express";

const app = express();

dotenv.config();
/*
(async ()=> {
   try { 
    const connectDB = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERRR: ",error);
            throw error
        })
        app.listen(process.env.PORT,()=>console.log(`App is listening on port ${process.env.PORT}`));
    }
    catch(error){
        console.error("MongoDB Connection FAILED: ",error)
        throw error
    }
})()
*/