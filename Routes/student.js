import Express from "express";
import { db } from "../DB/mongoConnection.js";


const studentRouter=Express.Router();
const studentCollcetion=db.collection('students');

studentRouter.post("/",async(req,res)=>{
    try{
        await studentCollcetion.insertOne(req.body);
        res.send({message:"Success"});
    }catch(e){
        res.status(500).send({message:"Internal server error",e});
    }
});

studentRouter.get("/",async(req,res)=>{
    try{
        const data=await studentCollcetion.find().toArray();
        res.send(data);
    }catch(e){

    }
})

export default studentRouter;