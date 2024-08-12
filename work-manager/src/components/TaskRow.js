import React, { useState } from 'react'
import TaskColumn from './TaskColumn';
import AddTask from './AddTask';

const TaskRow = () => {

    const [showAddTask, setShowAddTask] = useState(false);
    const [myTasks, setTasks] = useState([]);

    const isAddTask = () => {
        showAddTask ? setShowAddTask(false) : setShowAddTask(true);
    }

    const addTaskData = (heading, task) => {
        setTasks([...myTasks, { head: heading, task: task }])
    }

    return (
        <div>
            <TaskColumn myTasks={myTasks} />
            <AddTask visibility={showAddTask ? true : false} addTaskData={addTaskData} isAddTask={isAddTask} />
            <button className='ui button red' onClick={isAddTask}>+</button>
        </div>
    )
}

export default TaskRow;
