const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todo_list_db");

const db=mongoose.connection;

db.on("error",(err)=>{
    console.log("Error connnecting the server!",err);
});

db.once("open",()=>{
    console.log("Successfully connected to the database!");
});