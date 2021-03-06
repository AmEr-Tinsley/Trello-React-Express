import React, { useState,useEffect } from "react";
import Addproject from "./Addproject";
import Project from './Project';
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import Footer from '../Footer'
function Projects(){
    var token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    const [projects,Setprojects] = useState([])
   

    useEffect(() => {
      const fetchData = async () => {
      const result = await axios.post("projects/get",{username:decoded.username});
   
      var arr = result.data

        Setprojects(prevstate => {
          return arr ? arr.reverse() : []
        })
      };
      fetchData();
  } , []);
    function add(proj){
      axios.post("projects/add",{username:decoded.username,name:proj.title,description:proj.description})
      .then(res => {
      });
      const project_to_add = {name:proj.title,description:proj.description,todo:[],doing:[],done:[]}
      Setprojects(prevstate => {
        return [project_to_add,...prevstate]
      });
    }
    function del(proj){
        
        const arr = [...projects]
        for(let i = 0 ; i < arr.length ;i++){
            if(arr[i].name === proj.name && arr[i].description === proj.description){
              arr.splice(i,1)
            }
        }        
        Setprojects(prevstate => {
          return arr
        });
     
    }
    return(
      
        <div>
            <Addproject add = {add}/>
            {projects.map((proj,index) => {
              return(
                <Project key ={index} name={proj.name} description = {proj.description} todo = {proj.todo} doing = {proj.doing} done =  {proj.done} del = {del}/>
              );
            })}
            

           
        </div>
    );
}
export default Projects;