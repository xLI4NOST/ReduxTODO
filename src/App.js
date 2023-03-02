import logo from './logo.svg';
import './index.css';
import { Header } from './componets/landing/Header';
import { TaskBlock } from './componets/landing/TaskBlock';
import { taskReducer } from './store/taskReducer';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App(props) {
  return (
    <div className="page">
        <Header/>
        {/* <TaskBlock tasks={tasks} setTasks={setTasks}/> */}
        <TaskBlock/>
    </div>
  );
}

export default App;
