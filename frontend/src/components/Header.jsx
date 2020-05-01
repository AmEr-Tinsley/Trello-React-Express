import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core';
import { yellow, red } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor : "red",
    },
    title: {
      flexGrow: 1,
    },
    btn : {
        marginLeft : 10,
    }
  }));
function Header(){
    const classes = useStyles();
    var logged = false;
    return (<div className={classes.root}>
            <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Trello
          </Typography>
          <Button variant="contained" color="secondary">{logged ? 'Logout' : 'Login' }</Button>
          {!logged && <Button className={classes.btn} variant="contained" color="secondary">Register</Button>}
        </Toolbar>
      </AppBar>
    </div>);
}

export default Header;