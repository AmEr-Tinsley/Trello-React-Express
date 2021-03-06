import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid } from "@material-ui/core";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Projects from "./project_section/Projects";
import Topics from "./learning_section/Topics";
import Proj from "./project_section/Proj";
import Learn from "./learning_section/Learn";
import { Router, Route} from 'react-router-dom';
import history from '../history';
function App(){
    return (
        <div>
        <Router history={history}>
        <Grid container direction="column">
            <Grid item>
                <Route component = {Header} />
            </Grid>
        <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
                
                    <Route exact path = '/' component = {Home}/>
                    <Route exact path = '/login' component = {Login}/>
                    <Route exact path = '/register' component = {Register}/>
                    <Route exact path = '/projects' component = {Projects}/>
                    <Route exact path = '/learn' component = {Topics}/>
            </Grid>
            <Grid item xs={false} sm={2} />
            <Route exact path = '/projects/proj' component = {Proj}/>
            <Route exact path = '/learn/topic' component = {Learn}/>
            <Footer/>
        </Grid>
        </Grid>
        </Router>
        </div>);
}

export default App;