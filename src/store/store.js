import { createStore, combineReducers } from 'redux'
import { taskReducer } from './taskReducer'
import { composeWithDevTools } from 'redux-devtools-extension'


const rootReducer = combineReducers(
    {
        taskReducer
    }
)

export const store = createStore(rootReducer, composeWithDevTools())
