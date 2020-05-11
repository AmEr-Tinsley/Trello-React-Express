import React, { useState } from "react"
import TextField from '@material-ui/core/TextField';

import {DragDropContext,Droppable} from 'react-beautiful-dnd';

import Note from './Note'
function Proj(){
    const [data,Setdata] = useState(
        {
            'todo' : [{content: "task-1", id: 0},{content: "task-2", id: 1},{content: "task-3", id: 2},{content: "task-4", id: 3},{content: "task-5", id: 4},],
            'doing' : [],
            'done': []
        }
        
    )
    function onDragEnd(result){
        const {destination,source,droppableId} = result
        if(!destination){
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index){
            return
        }
        const start = data[source.droppableId]
        const finish = data[destination.droppableId]

        if(start === finish){
            const items = Array.from(data[source.droppableId]);
            const [removed] = items.splice(source.index,1);
            items.splice(destination.index, 0, removed);
            Setdata(prevdata => {
                return {
                    ...prevdata,
                    [source.droppableId]: items
                  };
            });
        }
        else{
            console.log(source.droppableId);
            console.log(destination.droppableId);
            
            
            const sourceitems = Array.from(data[source.droppableId]);
            const destinationitems = Array.from(data[destination.droppableId]);
            const [removed] = sourceitems.splice(source.index,1);
            destinationitems.splice(destination.index,0,removed);

            Setdata(prevdata => {
                return {
                    ...prevdata,
                    [source.droppableId]: sourceitems,
                    [destination.droppableId]:destinationitems,
                  };
            });
        }
         
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
                        style={{background: snapshot.isDraggingOver?'lightblue':'#f2a365'}} 
                    >
                        <h1>TODO</h1>
                    <form>
                        <label>
                            <TextField id="standard-basic" label="Add a task" />
                        </label>
                    </form>
                        {data['todo'].map((item,index)=><Note key={item.id} item={item} index={index}/>)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            <Droppable droppableId="doing">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        
                        {...provided.droppableProps}
                        className= "list"
                        style={{background: snapshot.isDraggingOver?'lightblue':'#f2a365'}}
                    >
                        <h1>Doing</h1>
                    
                        {data['doing'].map((item,index)=><Note key={item.id} item={item} index={index}/>)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            <Droppable droppableId="done">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        
                        {...provided.droppableProps}
                        className= "list"
                        style={{background: snapshot.isDraggingOver?'lightblue':'#f2a365'}}
                    >
                        <h1>Done</h1>
                    
                        {data['done'].map((item,index)=><Note key={item.id} item={item} index={index}/>)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            
            </DragDropContext>
        
    )
}

export default Proj