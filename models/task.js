const mongoose=require("mongoose");

let taskSchema=new mongoose.Schema({
    description:{
        type: String,
        // required: true
    },
    category:{
        type: String,
        // required: true
    },
    due_date:{
        type: String,
        // required: true
    },
});

const task=mongoose.model("task",taskSchema);
module.exports=task;