import logo from './logo.svg';
import './index.css';
import { Header } from './componets/landing/Header';
import { TaskBlock } from './componets/landing/TaskBlock';
import {taskInitAction, taskReducer} from './store/taskReducer';
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios, {get} from "axios";

function App(props) {

    const [isLoading, setIsLoading]= useState(false)
    const [isError, setError] = useState('')
    const tasks = useSelector(state=>state.taskReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        getResponse()
    }, [])

    const getResponse=  async ()=> {
        const response = await axios.get ('http://localhost:3001/tasks')
            .then(res=>{
                res.data.forEach((task)=>{

                    dispatch(taskInitAction(task.value , task.id, task.complited))
                })
            })
    }

  return (
    <div className="page">
        <Header/>
        <TaskBlock />
    </div>
  );
}

export default App;
