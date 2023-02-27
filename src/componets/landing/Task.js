import React from "react";
import circle from "../../images/svg/kryg.svg";
import remove from "../../images/svg/remove.svg"
export function Task(props) {
function del (){
    props.onRemove(props.task)
}
    return (
        <div className="task">
            <img className="task__status" src={circle} />
            <h2 className="task__text">{props.task}</h2>
            <button type="button" onClick={del} className="task__remove-button"><img src={remove} className="task__remove-button" /></button>
        </div>
    )
}