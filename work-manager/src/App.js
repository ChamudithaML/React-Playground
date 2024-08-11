import { useState } from 'react';
import './App.css';
import TaskCard from './components/TaskCard';
import TaskColumn from './components/TaskColumn';
import AddTask from './components/AddTask';

function App() {

  const addTask = () => {
    showAddTask ? setShowAddTask(false) : setShowAddTask(true);
    // console.log(showAddTask)
  }

  const addTaskData = () => {

  }

  const [showAddTask, setShowAddTask] = useState(false);

  const myTasks = [
    { head: "Heading 1", task: "task 1" },
    { head: "Heading 2", task: "task 2" }
  ];


  return (
    <>
      <div>
        <TaskColumn myTasks={myTasks} />
        <AddTask visibility={showAddTask ? true : false} addTaskData={addTaskData} />
        <button className='ui button red' onClick={addTask}>+</button>
      </div>
    </>
  );
}

export default App;
