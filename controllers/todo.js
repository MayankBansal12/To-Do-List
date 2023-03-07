const taskList=require("../models/task");

module.exports.todo=function(req,res){
    taskList.find({}).then(task=>{
        res.render('todo.ejs',{
            // async: true,
            task_list:task,
        });
    })
    .catch(err=>{
        console.log("Error in connecting to the database and getting the tasks",err);
        return;
    });
}

// Controller for creating the task
module.exports.createTask=function(req,res){
        taskList.create({
                description: req.body.description,
                category: req.body.category,
                due_date: req.body.due_date
            }).then(()=>{
                res.redirect('back');
        })
        .catch(err => {
            console.error(err);
            return;
        });
};

// Deleting the task
module.exports.deleteTask=(req,res)=>{
    let id=req.query.id;
    taskList.findByIdAndDelete(id).then(()=>{
        res.redirect("back");
    }).catch((err)=>{
        console.log("Error in deleting the task",err);
        return;
    });
};