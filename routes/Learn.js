const express = require("express");
const learn = express.Router();


const User = require('../models/users');

learn.post('/add',(req,res)=>{
    const learn = {name:req.body.name,description:req.body.description,todo:[],doing:[],done:[]}
    User.findOne({
        username: req.body.username
      }).then(user =>{
        user.learn.push(learn);
        user.save();
     });
})

learn.post('/delete',(req,res)=> {
    User.findOne({
      username: req.body.username
    }).then(user => {    
      for(let i = 0; i < user.learn.length;i++){
          if(user.learn[i].name === req.body.name && user.learn[i].description === req.body.description){
            user.learn.splice(i,1);
          }
      }
      user.save();
   });
  })

  learn.post('/topictasks',(req,res) =>{
    User.findOne({
        username : req.body.username
    }).then(user =>{
      for(let i = 0;i < user.learn.length;i++){
        if(user.learn[i].name === req.body.name && user.learn[i].description === req.body.description){
          const ret = {
            todo : user.learn[i].todo,
            doing : user.learn[i].doing,
            done : user.learn[i].done
          }
          res.send(ret);
        }
      }
    })
  })

  learn.post('/addtopictask',(req,res) =>{
    User.findOne({
      username : req.body.username
    }).then(user =>{
      for(let i = 0;i<user.learn.length;i++){
        if(user.learn[i].name === req.body.name && user.learn[i].description === req.body.description){
          const id = user.learn[i].todo.length + user.learn[i].doing.length + user.learn[i].done.length 
          user.learn[i].todo.unshift({content:req.body.task,id:id})
          user.save()
        }
      }
    })
  })

  learn.post('/updatetopictasks',(req,res)=>{
    User.findOne({
      username : req.body.username
    }).then(user => {
      
      for(let i = 0;i<user.learn.length;i++){
        if(user.learn[i].name === req.body.name && user.learn[i].description === req.body.description){
          user.learn[i].todo = req.body.todo;
          user.learn[i].doing = req.body.doing;
          user.learn[i].done = req.body.done;
          user.save()
        }
      }
    })
})

module.exports = learn