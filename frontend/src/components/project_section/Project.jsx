import React from "react";

import DeleteIcon from '@material-ui/icons/Delete';
import history from '../../history';
import ForwardIcon from '@material-ui/icons/Forward';
import axios from 'axios';
import jwt_decode from 'jwt-decode'
function Project(props){
    var token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    function handleClick(){
      axios.post("projects/delete",{username:decoded.username,name:props.name,description:props.description})
        .then(res => {
      })
        props.del({name:props.name,description:props.description})
    }
    function showproject(){
      localStorage.setItem('description',props.description)
      localStorage.setItem('name',props.name)
      localStorage.setItem('todo', props.todo)
      localStorage.setItem('doing',props.doing)
      localStorage.setItem('done',props.done)

      history.push('projects/proj')
    }
    return(
        <div className= "project">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button onClick={showproject}>
             <ForwardIcon/>
           </button>
            <button onClick={handleClick}>
             <DeleteIcon/>
           </button>
           

        </div>
    );
}

export default Project;