import { Schema, model} from "mongoose";

const student=new Schema({
    name:{
        type:"string",
        required:true,
    },
    id:{
        type:"string",
        required:true,
    },
    class:{
        type:"string",
        required:true,
    },
    teacherId:{
        type:"string",
    }
});
const studentModel=new model('student',student,"students");
                            //(name,schema,collection);
export {studentModel}                        
