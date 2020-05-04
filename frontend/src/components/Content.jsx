import React, { useState } from "react";
import {useIslogged,login,register} from "./Header";
import Home from "./Home";
import Login from "./Login";
function Content(){
    const [projects,Setprojects] = useState(false);
    const [learn,Setlearn] = useState(false);
    return(<div>
        {login ?  <Login/> : <Home/>}
        </div>
        );
}

export default Content;