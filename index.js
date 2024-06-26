import Express  from "express";
import studentRouter from "./Routes/student.js";
import connectDb from "./DB/mongoConnection.js";
import connectViaMongoose from "./DB/mongooseConnection.js";
import cors from "cors"

const server=Express();
server.use(Express.json());
server.use(cors());

const port=4000;
await connectDb();
await connectViaMongoose();
server.use("/student",studentRouter);

server.listen(port,()=>{
    console.log(port);
});