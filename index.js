const express=require("express");
const app=express();
const port=8000;

// Connecting to the database
const db=require("./config/mongoose");

// Setting up the express and ejs
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({'extended': true }));
app.use(express.static('assets'));

// Router for all the request
app.use('/',require('./routes'));



app.listen(port,function(err){
    if(err){
        console.log("Error!",err);
    }
    console.log("Server is running on",`${port}`);
});