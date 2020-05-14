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
    const[err,seterr] = useState('');
    const classes = useStyles();
    const[userexist,setuserexist] = useState('');

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

      const errors = {}
      const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      errors.email = !form.email.match(emailformat) ?
          "Invalid Email" : ""
      errors.password = form.password.length < 6 ?
            "Password should be more than 6 characters" : ""
      errors.user = form.username.length === 0 ?
            "err" : "";
      var ok = false
      for(let i = 0 ; i < form.username.length ;i++){
          if(form.username[i]!=' '){
            ok = true;
          }
      }
      
      if( !ok ){
        errors.user = 'err';
      }
      
      if(errors.email === "" && errors.password === "" && errors.user ===""){
        axios.post("users/register",{username:form.username,email:form.email,password:form.password})
        .then(res => {
          
          if(!res.data.error){
            history.push('/login');
          }
          else{
            setuserexist(prevuserexist=>{
              return <div style={{color:'yellow'}}>
              <p>This Username is already taken</p>
              <p>Try something else !</p>
              </div>;
            })
          }
        });
      }
      else{
        seterr(preverr =>{
          return <div style={{color:"yellow"}}>
              <ul>
                <li> Username should not be empty </li>
                <li> Email must be valid</li>
                <li>Password length must be atleast 6</li>
              </ul>
              <b>Please correct what is wrong.</b>
          </div>;
        })
      }
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
                <br/>
                {err}
                {userexist}
            </form>
        </Zoom>
       
    );
}

export default Register;