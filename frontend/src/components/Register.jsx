import React , {useState} from "react";
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { Button } from "@material-ui/core";
import axios from 'axios';
import history from '../history';

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
function Register(props){
    const classes = useStyles();

    const [form, setForm] = useState({
      username: "",
      email :"",
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
      console.log(form);
      
      axios.post("users/register",{username:form.username,email:form.email,password:form.password})
      .then(res => {
        console.log(res.data);
        
        if(!res.data.error){
          history.push('/login');
       }
  });
  }
    return (
        <Zoom in = {true}>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={Submit}>
                <Input style ={{color:' #ccc'}} placeholder="Username" name="username" onChange={handleChange} />
                <br/>
                <Input style ={{color:' #ccc'}} placeholder="Email" name="email"  onChange={handleChange}/>
                <br/>
                <Input style ={{color:' #ccc'}} placeholder="password" type = "password" name="password" onChange={handleChange} />
                <br/>
                <Button type = "submit" variant="contained" color="primary">SIGN UP</Button>
            </form>
        </Zoom>
       
    );
}

export default Register;