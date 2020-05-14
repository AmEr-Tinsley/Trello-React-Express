import React from "react";

import DeleteIcon from '@material-ui/icons/Delete';
import history from '../../history';
import ForwardIcon from '@material-ui/icons/Forward';
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import Fab from '@material-ui/core/Fab';

function Topic(props){
    var token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    function handleClick(){
      axios.post("learn/delete",{username:decoded.username,name:props.name,description:props.description})
        .then(res => {
      })
        props.del({name:props.name,description:props.description})
    }
    function showtopic(){
      localStorage.setItem('description',props.description)
      localStorage.setItem('name',props.name)
      localStorage.setItem('todo', props.todo)
      localStorage.setItem('doing',props.doing)
      localStorage.setItem('done',props.done)

      history.push('Learn/topic')
    }
    return(
        <div className= "project">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <Fab onClick={showtopic}> <ForwardIcon/></Fab> 
             <Fab onClick={handleClick}><DeleteIcon/></Fab>           

        </div>
    );
}

export default Topic;