import React, {useEffect, useState} from "react";
import cipBoard from  "../../images/img/Clipboard.png"
import { useDispatch, useSelector } from 'react-redux';
import {taskAddAction, taskCompliteAction, taskInitAction, taskRemoveAction} from "../../store/taskReducer";
import {NoTask} from "./NoTask";
import axios from "axios";

import { Task } from "./Task";

export function TaskBlock({serverRemove}) {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const tasks = useSelector(state=>state.taskReducer)

    const [resp, setResp] = useState([])

    const complitedTasks= tasks.filter((task)=>{
        return task.complited != false
    })
    function handleSetTask(e) {
        setValue(e.target.value)
    }
    // const handleAddTask = () => {
    //     if(value != 0 ){
    //         dispatch(taskAddAction(value))
    //         setValue("")
    //     }
    //
    // }
    console.log(tasks)
    const postTask = async  ()=>{
        if(value != 0){
            const addTask= await axios.post('http://localhost:3001/tasks/' , {value:value, id:Date.now(), complited: false})
                .then(res=>console.log(res))
                .catch(err=>console.log(err))
                .finally(()=>{
                    dispatch(taskAddAction(value, false))
                    setValue("")
                })
        }

    }
    const deleteTask= async (id)=>{
        const removeTask = await axios.delete (`http://localhost:3001/tasks/${id}`)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            .finally(()=>
                dispatch(taskRemoveAction(id))
            )
    }

    // const handleCompliteTask= (id) =>{
    //     dispatch(taskCompliteAction(id))
    // }

    const compliteTask = async (id)=>{
    const complite = await axios.patch(`http://localhost:3001/tasks/${id}`, {complited:true? false:true} )
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        .finally(()=>{
            dispatch(taskCompliteAction(id))
        })
    }


    const handleKeyDown = e =>{
        if(value !== ""){
            e.key === "Enter" && postTask()
            e.key === "Escape" && setValue('')
        }

    }

    return <div className="task-block">

        <div className="task-form">
            <input className="header__task-input" onChange={handleSetTask} value={value || ""} onKeyDown={handleKeyDown} />
            <button className="task-form_button" onClick={postTask} >
                Criar
                <svg className="task-form_button__image" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F2F2F2">
                    <path d="M7.98 1.45a6.53 6.53 0 1 1 0 13.07 6.53 6.53 0 0 1 0-13.07Zm0-1.45a7.98 7.98 0 1 0 .07 15.97A7.98 7.98 0 0 0 7.98 0Z"/>
                    <path d="M11.7 7.38H8.5V4.17H7.4v3.21H4.2v1.08H7.4v3.21H8.5v-3.2h3.2V7.37Z"/>
                </svg>
            </button>
        </div>

        <div className="task-block__info">
            <div className="task-block__info__score-block">
                <h2 className="task-block__info__tasks-score">Tarefas criadas</h2>
                <span className="task-counter"><p className="task-counter__text">{tasks.length}</p></span>
            </div>

            <div className="task-block__info__score-block task-block__info__score-block_type_right ">
                <h2 className="task-block__info__tasks-score">Concluídas</h2>
                <span className="task-counter" ><p className="task-counter__text">{complitedTasks.length} de {tasks.length}</p></span>
            </div>
        </div>

        <div className="task__empty">
            {tasks.length === 0 ? <NoTask/> : "" }
            {
                tasks.map( task => <Task
                    key={task.id}
                    id={task.id}
                    complited ={task.complited}
                    remove={deleteTask}
                    toggleComplite={compliteTask}
                    value={task.value}/>
                )
            }
        </div>


    </div>
}