const express=require("express");
const router=express.Router();

const todoController=require("../controllers/todo");
router.get('/',todoController.todo);
router.post('/create-task',todoController.createTask);
router.get('/delete-task',todoController.deleteTask);

module.exports=router;