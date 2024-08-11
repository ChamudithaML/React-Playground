import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'

const AddTask = ({ visibility, addTaskData }) => {

    const [heading, setHeading] = useState("");
    const [task, setTask] = useState("");

    const add = (e) => {
        e.preventDefault();
        console.log("Added");
    }

    return (
        <form className='ui form' style={{ display: visibility ? '' : 'none' }} onSubmit={add} >
            
            <div className='field'>
                <input
                    type='text'
                    placeholder='Heading'
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}>
                </input>
            </div>

            <div className='field'>
                <input
                    type='text'
                    placeholder='Task'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}>
                </input>
            </div>
        </form>
    )
}

export default AddTask;
