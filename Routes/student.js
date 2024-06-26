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
})

export default studentRouter;