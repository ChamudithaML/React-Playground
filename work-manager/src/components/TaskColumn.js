import React from 'react'
import TaskCard from './TaskCard';

// myTasks is array containing task objects
const TaskColumn = ({ myTasks }) => {
    return (
        <div>
            {myTasks.map((item, index) => (
                <TaskCard key={index} task={item.task} head={item.head} />
            ))}
        </div>
    )
}

export default TaskColumn;
