import { configStore, combineReducers } from 'redux'
const defaultState = {
    tasks: []
}

const ADD_TASK = "ADD_TASK"
const REMOVE__TASK = "REMOVE_TASK"

export const taskReducer = (state =defaultState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.checkTask]  }
        case REMOVE__TASK:
            return { ...state, tasks: state.tasks.filter((task)=> task.id  !== action.checkTask)  } 
    default:
            return state
    }
}

export const taskAddAction = (checkTask)=>({type:ADD_TASK, checkTask})
export const taskRemoveAction =(checkTask)=>({type: REMOVE__TASK, checkTask})