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
    const project = {name:"wa",description:"waaaaaa",todo:[],doing:[],done:[]}
    User.findOne({
        username: req.body.username
      }).then(user =>{
        user.projects.push(project);
        user.save();
     });
    console.log(req.body.username);
})

module.exports = projects
