import React , {useState} from "react";
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { Button } from "@material-ui/core";
import { login } from "./Header";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    paddingTop:'20%',
    paddingLeft : '42%',
    color : "White",
  },
}));
function Login(props){
    const classes = useStyles();
    const [form, setForm] = useState({
      username: "",
      password: ""
    });
  function handleChange(event) {
      const { name, value } = event.target;
  
      setForm(prevForm => {
        return {
          ...prevForm,
          [name]: value
        };
      });
  }
  function Submit(event){
      event.preventDefault();
      axios.post("users/login",{username:form.username,password:form.password})
      .then(res => {
        console.log(res.data);
        
        if(!res.data.error){
          localStorage.setItem('usertoken', res.data)
          props.redirect();
       }
  });
  }
    return (
      <Zoom in = {true}>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={Submit}>
          <Input placeholder="Username" name = "username" onChange={handleChange}  />
          <br/>
          <Input type="password" placeholder="password" name = "password" onChange={handleChange} />
          <br/>
          <Button type = "submit" variant="contained"color="primary">SIGN IN</Button>
      </form>
  </Zoom>
       
    );
}

export default Login;