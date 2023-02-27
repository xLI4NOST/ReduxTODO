import logo from './logo.svg';
import './index.css';
import { Header } from './componets/landing/Header';
import { TaskBlock } from './componets/landing/TaskBlock';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App(props) {
  const dispatch = useDispatch()
const [tasks, setTasks] = useState([])
const task1 = useSelector(state=>state.tasks)
  return (
    <div className="page">
        <Header/>
        <TaskBlock tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
