import React, { useState,useEffect } from "react"
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

import {DragDropContext,Droppable} from 'react-beautiful-dnd';
import jwt_decode from 'jwt-decode'
import Fab from '@material-ui/core/Fab';

import Note from './Note'
import axios from 'axios';
function Proj(){
    var token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    const [task,Settask] = useState("")
    const [data,Setdata] = useState({todo:[],doing:[],done:[]})
    
    useEffect(async () => {
        const result = await axios.post(
          'projects/projecttasks',{username:decoded.username,name:localStorage.name,description:localStorage.description}
        );
     
        Setdata(result.data);
      }, []);
 
    function handleChange(event){
        const { name, value } = event.target;
        Settask(value)
    }
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

            let todo = source.droppableId==='todo' ? items :  data['todo']
            let doing = source.droppableId==='doing' ? items : data['doing']
            let done = source.droppableId==='done' ? items : data['done']

            axios.post('projects/updateprojtasks',{username:decoded.username,name:localStorage.name,description:localStorage.description
                ,todo:todo,doing:doing,done:done
            }).then(res => {
            });
        }
        else{
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
            let todo = source.droppableId==='todo' ? sourceitems : (destination.droppableId === 'todo' ? destinationitems : data['todo'])
            let doing = source.droppableId==='doing' ? sourceitems : (destination.droppableId === 'doing' ? destinationitems : data['doing'])
            let done = source.droppableId==='done' ? sourceitems : (destination.droppableId === 'done' ? destinationitems : data['done'])

            axios.post('projects/updateprojtasks',{username:decoded.username,name:localStorage.name,description:localStorage.description
                ,todo:todo,doing:doing,done:done
            }).then(res => {
            });
        }
         
    }

    function handlesubmit(event){
        event.preventDefault();
        console.log(task);
        
        axios.post('/projects/addprojtask',{username:decoded.username,name:localStorage.name,description:localStorage.description,task:task})
        .then(res => {
        });

        axios.post('projects/projecttasks',{username:decoded.username,name:localStorage.name,description:localStorage.description})
        .then(res=>{
            Setdata(res.data)
        });

        Settask(prevtask => {
            return "";
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
                        style={{background: snapshot.isDraggingOver?'lightblue':'#f2a365'}} 
                    >
                        <h1>TODO</h1>
                    <form onSubmit={handlesubmit}>
                        <label>
                            <TextField id="standard-basic" name="task" label="Add a task" onChange={handleChange}/>
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