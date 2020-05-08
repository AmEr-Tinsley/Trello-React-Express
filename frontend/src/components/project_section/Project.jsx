import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Grid,Card,CardActionArea,CardMedia,CardContent,Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(12),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      paddingTop: '35.25%',

    },
    Cardroot: {
        maxWidth: 345,
      },
      media: {
        height: 100,
        paddingTop: '70.25%',
      },
  }));
function Project(){
    const classes = useStyles();

    return(
        <div className= "project">
            <h1>Project name</h1>
            <p>Project bla bla bla bla bla</p>

        </div>
    );
}

export default Project;