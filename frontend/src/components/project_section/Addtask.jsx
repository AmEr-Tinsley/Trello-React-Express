import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
function Addtask(props){
    var token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    const [task,Settask] = useState("")
    function handleChange(event){
        const { name, value } = event.target;
        Settask(prevtask=>{
            return value
        })
    }
    function handlesubmit(event){
        Settask(prevtask => {
            return "";
        });
        event.preventDefault();
        console.log(task);
       
        
        axios.post('/projects/addprojtask',{username:decoded.username,name:localStorage.name,description:localStorage.description,task:task})
        .then(res => {
        });

        props.add(task);
    }
    return (
        <form onSubmit={handlesubmit}>
                <label>
                    <TextField id="standard-basic" name="task" label="Add a task" value={task} onChange={handleChange}/>
                </label>
        </form>
    );
}
export default Addtask;