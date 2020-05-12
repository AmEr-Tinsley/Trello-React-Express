import React, { useState,useEffect } from "react"
import AddIcon from '@material-ui/icons/Add';

import {DragDropContext,Droppable} from 'react-beautiful-dnd';
import jwt_decode from 'jwt-decode'
import Fab from '@material-ui/core/Fab';
import Addtask from './Addtask';
import Note from './Note'
import axios from 'axios';
function Proj(){
    var token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    
    const [data,Setdata] = useState({todo:[],doing:[],done:[]})
    
    useEffect(() => {
        const fetchData = async () => {
        const result = await axios.post(
          'projects/projecttasks',{username:decoded.username,name:localStorage.name,description:localStorage.description}
        );
     
        Setdata(result.data);
        };
        fetchData();
    } , []);
 
    
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
            const todo = source.droppableId==='todo' ? [...sourceitems] : (destination.droppableId === 'todo' ? [...destinationitems] : [...data['todo']])
            const doing = source.droppableId==='doing' ? [...sourceitems] : (destination.droppableId === 'doing' ? [...destinationitems] : [...data['doing']])
            const done = source.droppableId==='done' ? [...sourceitems] : (destination.droppableId === 'done' ? [...destinationitems] : [...data['done']])

            axios.post('projects/updateprojtasks',{username:decoded.username,name:localStorage.name,description:localStorage.description
                ,todo:todo,doing:doing,done:done
            }).then(res => {
            });
        }
         
    }

    function add(task){
        
        console.log(task);
        const todo = [...data['todo']]
        let id = data['todo'].length + data['doing'].length + data['done'].length
        todo.unshift({content:task,id:id})

        Setdata(prevdata=>{
            return {
                ...prevdata,
                todo:todo
            };
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
                        <Addtask add = {add}/>
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