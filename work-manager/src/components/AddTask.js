import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'

const AddTask = ({ visibility, addTaskData, isAddTask }) => {

    const [heading, setHeading] = useState("");
    const [task, setTask] = useState("");

    const add = (e) => {
        e.preventDefault();
        console.log("Added");

        addTaskData(heading,task);

        setHeading("");
        setTask("");
        isAddTask();
    }

    const handleKeyDown = (e) => {
        if(e.key ==='Enter'){
            add(e);
        }
    }

    return (
        <form className='ui form' style={{ display: visibility ? '' : 'none' }} onSubmit={add} >
            
            <div className='field'>
                <input
                    type='text'
                    placeholder='Heading'
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                    onKeyDown={handleKeyDown}>
                </input>
            </div>

            <div className='field'>
                <input
                    type='text'
                    placeholder='Task'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyDown={handleKeyDown}>
                </input>
            </div> 
                       
        </form>
    )
}

export default AddTask;
