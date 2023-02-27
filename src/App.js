import logo from './logo.svg';
import './index.css';
import { Header } from './componets/landing/Header';
import { TaskBlock } from './componets/landing/TaskBlock';
import { useState } from 'react';

function App(props) {
const [tasks, setTasks] = useState([])

  return (
    <div className="page">
        <Header/>
        <TaskBlock tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
