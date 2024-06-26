import { MongoClient } from "mongodb";
import dotenv  from "dotenv";

dotenv.config();
const dbName=process.env.DB_NAME;
const user=process.env.USER;
const password=process.env.PASSWORD;
const cluster=process.env.CLUSTER;

const cloudUrl=`mongodb+srv://${user}:${password}@${cluster}/?retryWrites=true&w=majority&appName=Cluster0`;

const client=new MongoClient(cloudUrl);

const db=client.db(dbName);

async function connectDb(){
    try{
        await client.connect();
        console.log("DB Connected Successfully");
    }catch(e){
        console.log("Connection failed");
        process.exit(1);
    }
}

export {db};
export default connectDb;