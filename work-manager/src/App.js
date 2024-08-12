import { useState } from 'react';
import './App.css';
import TaskRow from './components/TaskRow';

function App() {

  const addTaskRow = () => {

    updateTaskRow([...taskRow, <TaskRow />]);

    console.log(taskRow);
  }

  const [taskRow, updateTaskRow] = useState([]);

  return (
    <>
      { }
      <button onClick={addTaskRow}>Add Task Column</button>     
    </>
  );
}

export default App;

// <TaskRow topic={topic} myTasks={myTasks} showAddTask={showAddTask} addTaskData={addTaskData} isAddTask={isAddTask} />
