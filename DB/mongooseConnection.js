import mongoose from "mongoose";
import dotenv  from "dotenv";

dotenv.config();

const dbName=process.env.DB_NAME;
const user=process.env.USER;
const password=process.env.PASSWORD;
const cluster=process.env.CLUSTER;

const cloudUrl=`mongodb+srv://${user}:${password}@${cluster}/${dbName}/?retryWrites=true&w=majority&appName=Cluster0`;

async function connectViaMongoose(){
    try{
        await mongoose.connect(cloudUrl);
        console.log("Mongoose connected successfully");
    }catch(e){
        console.log("Mongoose connection fail");
        process.exit(1);        
    }
}

export default connectViaMongoose;