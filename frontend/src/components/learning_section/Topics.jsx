// eslint-disable-next-line react-hooks/exhaustive-deps 
import React, { useState,useEffect } from "react";
import Addtopic from "./Addtopic";
import Topic from './Topic';
import axios from 'axios';
import jwt_decode from 'jwt-decode'
function Topics(){
    var token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    const [topics,Settopics] = useState([])
   

    useEffect(() => {
      const fetchData = async () => {
      const result = await axios.post("learn/get",{username:decoded.username});
   
      var arr = result.data

        Settopics(prevstate => {
          return arr ? arr.reverse() : []
        })
      };
      fetchData();
  } , []);
    function add(topic){
      axios.post("learn/add",{username:decoded.username,name:topic.title,description:topic.description})
      .then(res => {
      });
      const topic_to_add = {name:topic.title,description:topic.description,todo:[],doing:[],done:[]}
      Settopics(prevstate => {
        return [topic_to_add,...prevstate]
      });
    }
    function del(topic){
        
        const arr = [...topics]
        for(let i = 0 ; i < arr.length ;i++){
            if(arr[i].name === topic.name && arr[i].description === topic.description){
              arr.splice(i,1)
            }
        }        
        Settopics(prevstate => {
          return arr
        });
     
    }
    return(
      
        <div>
            <Addtopic add = {add}/>
            {topics.map((proj,index) => {
              return(
                <Topic key={index} name={proj.name} description = {proj.description} todo = {proj.todo} doing = {proj.doing} done =  {proj.done} del = {del}/>
              );
            })}
            

           
        </div>
    );
}
export default Topics;