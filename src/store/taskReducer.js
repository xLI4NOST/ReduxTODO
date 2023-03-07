const defaultState = []
const ADD_TASK = "ADD_TASK"
const REMOVE__TASK = "REMOVE_TASK"
const COMPLITE__TASK = "COMPLITE_TASK"
const TASK__INIT = "TASK__INIT"

export const taskReducer = (state =defaultState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [ ...state, { id: Date.now(), value: action.checkTask, complited: action.complited } ]
        case REMOVE__TASK:
            return state.filter((task)=> task.id  !== action.checkTask)
        case COMPLITE__TASK:
            return state.map( task => (

                task.id === action.checkTask
                ?
                {...task, complited: !task.complited}
                :
                task
            ))
        case TASK__INIT:
            return [ ...state, { id: action.id, value: action.checkTask, complited:action.complited } ]
        default:
            return state
    }
}


export const taskAddAction = (checkTask, complited)=>({type:ADD_TASK, checkTask, complited})
export const taskRemoveAction =(checkTask)=>({type: REMOVE__TASK, checkTask})

export  const taskCompliteAction = (checkTask)=>({type: COMPLITE__TASK, checkTask})

export const taskInitAction = (checkTask, id, complited) =>({type: TASK__INIT, checkTask , id, complited})
