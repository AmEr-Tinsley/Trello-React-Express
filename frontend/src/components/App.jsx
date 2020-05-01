import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { Grid } from "@material-ui/core";


function App(){
    return (
        <div>
        <Grid container direction="column">
            <Grid item>
                <Header />
            </Grid>
        <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
            <Content />
            
            </Grid>
            <Grid item xs={false} sm={2} />
        </Grid>
        <Footer/>
        </Grid>
        </div>);
}

export default App;