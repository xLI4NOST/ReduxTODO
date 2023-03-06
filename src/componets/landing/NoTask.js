import React from "react";
import cipBoard from "../../images/img/Clipboard.png";

export  const NoTask =()=>{
    return (
        <div className="no-task">
            <img alt="no-task" className="start-empty" src={cipBoard}/>
            <h2 className="no-task__title">Você ainda não tem tarefas cadastradas</h2>
            <p className="no-task__subtitle">Crie tarefas e organize seus itens a fazer</p>
        </div>


    )
}