import React from "react"
import TextField from '@material-ui/core/TextField';

import Note from './Note'
function Proj(){

    return (
        <div>
            <div className= "list">
                <h1>TODO</h1>
                <form>
                    <label>
                        <TextField id="standard-basic" label="Add a task" />
                    </label>
                </form>
                
                <Note/>
            </div>
            <div className= "list">
                <h1>DOING</h1>
                <form>
                    <label>
                        <TextField id="standard-basic" label="Add a task" />
                    </label>
                </form>
                
                <Note/>
            </div>
            <div className= "list">
                <h1>DONE</h1>
                <form>
                    <label>
                        <TextField id="standard-basic" label="Add a task" />
                    </label>
                </form>
            
                <Note/>
            </div>
        </div>
    )
}

export default Proj