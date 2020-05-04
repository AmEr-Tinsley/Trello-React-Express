import React from "react";
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { Button } from "@material-ui/core";
import { login } from "./Header";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    paddingTop:'20%',
    paddingLeft : '35%',
    color : "White",
  },
}));
function Login(){
    const classes = useStyles();

    return (
        <Zoom in = {true}>
            <form className={classes.root} noValidate autoComplete="off">
                <Input placeholder="Username"  />
                <br/>
                <Input placeholder="password" />
                <br/>
                <Button variant="contained" color="primary">Submit</Button>
            </form>
        </Zoom>
       
    );
}

export default Login;