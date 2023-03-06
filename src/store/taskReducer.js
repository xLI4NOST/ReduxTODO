const defaultState = []
const complited = false
const ADD_TASK = "ADD_TASK"
const REMOVE__TASK = "REMOVE_TASK"
const COMPLITE__TASK = "COMPLITE_TASK"
export const taskReducer = (state =defaultState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [ ...state, { id: Date.now(), value: action.checkTask, complited } ]
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
        default:
            return state
    }
}

export const taskAddAction = (checkTask)=>({type:ADD_TASK, checkTask})
export const taskRemoveAction =(checkTask)=>({type: REMOVE__TASK, checkTask})

export  const taskCompliteAction = (checkTask)=>({type: COMPLITE__TASK, checkTask})