const mongoose=require("mongoose");

// Task Schema for To Do List
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