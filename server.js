const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors');

const app=express();
app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());
mongoose.connect("mongodb://localhost:27017/todoDB",{useNewUrlParser:true})


const todoSchema= new mongoose.Schema({
    id:Number,
    todo:String,
    checked:Boolean
})

const Todo=mongoose.model("Todo",todoSchema);

// const todoo=new Todo(
// {
//     id:2,
//     todo:"two",
//     checked:false
// }
// );
// todoo.save();
app.get('/todos',function(req,res){
    Todo.find({},function(error,todos){
        // console.log(res);
        if(error){
            return error
        }else{

            res.json(todos)
        }    
    })
})

app.get('/todos/:todoId',function(req,res){
    Todo.deleteOne({_id:req.params.todoId},function(err,todos){
        if(err){
            console.log(err);
        }
        else{
            console.log("Deleted");
            // res.json(todos)
            // console.log(res);
            res.redirect('/todos')


        }
    })
})

app.get('/todoCheck/:id',function(req,res){
    Todo.findOne({_id:req.params.id},function(err,todo){
        todo.checked=!todo.checked;
        todo.save();
        res.redirect('/todos');
    })
})

app.post('/addTodo',function(req,res){
    // var todo=req.body.newTodo.todoContent;
    // var checked=req.body.newTodo.checked;
    // var todo=req.body;
    console.log(req.body);
    const newtodo=new Todo({
        todo:req.body.todo,
        checked:req.body.checked
    })
    newtodo.save();
    res.redirect('/todos')

    // console.log(checked);
})


app.listen(3000,function(){
    console.log("Server started.");
})