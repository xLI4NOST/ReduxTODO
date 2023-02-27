import { configStore, combineReducers } from 'redux'

const defaultState = {
    task: [],
}

const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return { ...state, task: state.task + action.addTask }
        case "REMOVE_TASK":
            return { ...state, task: state.task - action.addTask }



    default:
            return state
    }
}

const store = configStore(taskReducer)
