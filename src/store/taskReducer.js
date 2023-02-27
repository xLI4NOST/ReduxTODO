import { configStore, combineReducers } from 'redux'

const defaultState = {
    task: [10],
}

export const taskReducer = (state =defaultState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return { ...state, task: state.task + action.addTask }
        case "REMOVE_TASK":
            return { ...state, task: state.task - action.addTask } 



    default:
            return state
    }
}