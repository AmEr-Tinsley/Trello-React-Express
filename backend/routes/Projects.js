const express = require("express");
const projects = express.Router();

const User = require('../models/users');
projects.post('/get' , (req, res) => {
    User.findOne({
        username: req.body.username
      }).then(user =>{
         res.send(user.projects);
      });
})
projects.post('/add',(req,res)=>{
    const project = {name:req.body.name,description:req.body.description,todo:[],doing:[],done:[]}
    User.findOne({
        username: req.body.username
      }).then(user =>{
        user.projects.push(project);
        user.save();
     });
})
projects.post('/delete',(req,res)=> {
  User.findOne({
    username: req.body.username
  }).then(user => {    
    for(let i = 0; i < user.projects.length;i++){
        if(user.projects[i].name === req.body.name && user.projects[i].description === req.body.description){
          user.projects.splice(i,1);
        }
    }
    user.save();
 });
})

module.exports = projects
