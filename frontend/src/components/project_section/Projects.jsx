import React, { useState } from "react";
import Addproject from "./Addproject";
import Project from './Project';
import axios from 'axios';
import jwt_decode from 'jwt-decode'

function Projects(){
    var token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    /*axios.post("projects/add",{username:decoded.username})
      .then(res => {
    });
    axios.post("projects/get",{username:decoded.username})
      .then(res => {
        console.log(res.data);
    });*/
    return(
        <div>
            <Addproject/>
            <Project/>
            <Project/>
            <Project/>
        </div>
    );
}
export default Projects;