import React from "react";
import { useDispatch, useSelector } from "react-redux";
import removebutton from "../../images/svg/remove.svg"
import {Mark} from "../../images/svg/Mark";

export function Task({id, remove, value, toggleComplite, complited}) {
    const dispatch = useDispatch()
    const tasks = useSelector(state=>state.taskReducer)

    return (

        <div className="task">

            <svg onClick={ () => toggleComplite(id)} xmlns="http://www.w3.org/2000/svg"  className={complited ? "task__status_true" : "task__status"}>
                <path d="M11.98 19.43a7.41 7.41 0 1 0 0-14.82 7.41 7.41 0 0 0 0 14.82Z"/>
                <path d="M11.96 4.86a7.14 7.14 0 1 1 0 14.28 7.14 7.14 0 0 1 0-14.28Zm0-1.59a8.73 8.73 0 1 0 .08 17.46 8.73 8.73 0 0 0-.08-17.46Z"/>
                <path fill="#F2F2F2" d="m15.43 9.34-4.33 4.33-2.48-2.48-.84.84 3.32 3.32 5.17-5.17-.84-.84Z"/>
            </svg>

            <h2 className={`task__text ${complited ? "task__text_decoration" : ''}`}>{value}</h2>
            <button
                type="button"
                onClick={() => remove(id)}
                className="task__remove-button"
            >
                <img src={removebutton} className="task__remove-button" />
            </button>
        </div>

    )
}