import React, { useEffect, useState } from "react";
import plus from "../../images/svg/plus.svg";

import { Task } from "./Task";
export function TaskBlock(props) {

    function handleSetTask(e) {
        setValue(e.target.value)
    }
    function handleAddTask(e) {
        e.preventDefault()
        props.setTasks([value, ...props.tasks])
        console.log(props.tasks);
    }

    function handleRemoveTask (task){
        const newArr = props.tasks.filter((elem)=>{
            return elem !== task
        })
        props.setTasks(newArr)
    }

    const [value, setValue] = useState('')
    return (
        <div className="task-block">
            <form onSubmit={handleAddTask} className="task-form">
                <input onChange={handleSetTask} value={value || ""} type="text" name="task" required="" noValidate="" className="header__task-input" />
                <button className="task-form_button" type="submit">
                    Criar
                    <img className="task-form_button__image" src={plus} />
                </button>
            </form>
            <div className="task-block__info">
                <div className="task-block__info__score-block">
                    <h2 className="task-block__info__tasks-score">Tarefas criadas</h2>
                    <span className="task-counter"><p className="task-counter__text">{props.tasks.length}</p></span>
                </div>

                <div className="task-block__info__score-block task-block__info__score-block_type_right ">
                    <h2 className="task-block__info__tasks-score">Concluídas</h2>
                    <span className="task-counter" ><p className="task-counter__text">9</p></span>
                </div>
            </div>

            <div className="task__empty">
                {props.tasks.map((task) => (
                    <Task onRemove={handleRemoveTask} task={task}
                    />
                ))}

            </div>


        </div>
    )
}