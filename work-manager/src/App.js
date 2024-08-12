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
      { taskRow.length>0 && taskRow.map((row) => row)}
      <button onClick={addTaskRow}>Add Task Column</button>     
    </>
  );
}

export default App;
