import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

export const connectDB = async () =>{
    try{
        console.log("why",process.env.MONGO_URI)
        const {MONGO_URI}   = process.env
        if(!MONGO_URI) throw new Error("Mongo Uri is not set")
       const conn = await mongoose.connect(process.env.MONGO_URI);
       console.log("connected", conn.connection.host)
    }
    catch(error){
        console.error("couldn't connect",error)
        process.exit(1); // 1 means fail, 0 means success   
    }
    
}