import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Grid,Card,CardActionArea,CardMedia,CardContent,Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import history from '../../history';

function Project(props){
    function handleClick(){
        props.del({name:props.name,description:props.description})
    }
    function showproject(){
      localStorage.setItem('todo', props.todo)
      localStorage.setItem('doing',props.doing)
      localStorage.setItem('done',props.done)

      history.push('projects/proj')
    }
    return(
        <div className= "project" onClick = {showproject}>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button onClick={handleClick}>
             <DeleteIcon/>
           </button>

        </div>
    );
}

export default Project;