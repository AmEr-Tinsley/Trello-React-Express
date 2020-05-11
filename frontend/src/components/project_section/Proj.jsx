import React, { useState } from "react"
import TextField from '@material-ui/core/TextField';

import {DragDropContext,Droppable} from 'react-beautiful-dnd';

import Note from './Note'
function Proj(){
    const [data,Setdata] = useState([{content: "task-1", id: 0},{content: "task-2", id: 1},{content: "task-3", id: 2},{content: "task-4", id: 3},{content: "task-5", id: 4},])
    function onDragEnd(result){
        if(!result.destination){
            return;
          }
          const items = Array.from(data);
          const [removed] = items.splice(result.source.index,1);
          items.splice(result.destination.index, 0, removed);
          Setdata(prevdata => {
              return items;
          });
    }

    return (
        
        <DragDropContext
            onDragEnd={onDragEnd}
        >
            <Droppable droppableId="todo">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        
                        {...provided.droppableProps}
                        className= "list"
                    >
                        <h1>TODO</h1>
                    <form>
                        <label>
                            <TextField id="standard-basic" label="Add a task" />
                        </label>
                    </form>
                        {data.map((item,index)=><Note key={item.id} item={item} index={index}/>)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            
            </DragDropContext>
        
    )
}

export default Proj