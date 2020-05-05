import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core';
import { yellow, red } from "@material-ui/core/colors";
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    btn : {
        marginLeft : 10,
    }
  }));
  
  var login = false;
  var register = false;
  
  function Header(props){
    const classes = useStyles();
    

    function Handlelog(event){
      if(!localStorage.usertoken)
        props.Handlelogin();
      else{
        localStorage.removeItem('usertoken');
        props.redirect();  
      }
      
   }
    function handlereg(event){
      props.Handleregister();
    }

    return (<div className={classes.root}>
            <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Trello
          </Typography>
          <Button variant="contained" color="secondary" onClick={Handlelog}>{localStorage.usertoken ? 'SIGN OUT' : 'SIGN IN' }</Button>
          {!localStorage.usertoken && <Button className={classes.btn} onClick={handlereg} variant="contained" color="secondary">SIGN UP</Button>}
        </Toolbar>
      </AppBar>
    </div>);
}

export default Header;
export {login,register};