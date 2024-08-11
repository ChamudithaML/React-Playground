import React from 'react'

const TaskCard = ({task, head}) => {
    return (
        <div>
            <h4>{head}</h4>
            <p>{task}</p>
        </div>
    )
}

export default TaskCard;