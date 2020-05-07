import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core';
import { yellow, red } from "@material-ui/core/colors";
import axios from 'axios';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    btn : {
        marginLeft : 10,
        backgroundColor : "black",
    }
  }));
  

  
  function Header(props){
    const classes = useStyles();
    

    function Handlelog(event){
        localStorage.removeItem('usertoken');
   }

    return (<div className={classes.root}>
            <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Trello
          </Typography>
              {localStorage.usertoken && <Button className={classes.btn} variant="contained"><Link to='/login' color='red' onClick = {Handlelog}>SIGN OUT</Link></Button>}
              {!localStorage.usertoken && <Button className={classes.btn} variant="contained"><Link to='/login'>SIGN IN</Link></Button>}
              {!localStorage.usertoken && <Button className={classes.btn} variant="contained"><Link to='/register'>SIGN UP</Link></Button>}
        </Toolbar>
      </AppBar>
    </div>);
}

export default Header;
