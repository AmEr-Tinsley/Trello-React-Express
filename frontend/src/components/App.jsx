import React, { useState } from "react";
import axios from "axios";
import Header, { login } from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { Grid } from "@material-ui/core";
import Home from "./Home";
import Login from "./Login";
import register from "./Register"
import Register from "./Register";
function App(){
    const [login,Setlogin] = useState(false);
    const [register,Setregister] = useState(false);
    function Handlelogin(){
        Setlogin(true);
        Setregister(false);
    }
    function Handleregister(){
        Setregister(true);
        Setlogin(false);
    }
    return (
        <div>
        <Grid container direction="column">
            <Grid item>
                <Header  Handlelogin = {Handlelogin} Handleregister = {Handleregister}/>
            </Grid>
        <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
            {login && <Login/>}
            {register && <Register/>}
            {!login && !register && <Home/>}
            
            </Grid>
            <Grid item xs={false} sm={2} />
        </Grid>
        <Footer/>
        </Grid>
        </div>);
}

export default App;