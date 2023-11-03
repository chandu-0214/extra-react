import React, { useState } from 'react'
import './Hooks.css';

const AddTask = (props) => {
    const [task, setTask] = useState('')
    const [dueDate, setDueDate] = useState('')

    const handleDoneButton=() => {
        console.log("Done button clicked")
        props.doneButton()
        props.addItemInTheContainer({
            taskName: task,
            iscomplete: false,
            dueDate: dueDate
        })
    }
    const handleInputTask=(event) => {
        setTask(event.target.value)
    }
    const handleInputDate=(event) => {
        setDueDate(event.target.value)
    }

  return (
    <div className='addtaskContainer'>
        <input onChange={handleInputTask}className='taskInput' type="Text" placeholder='write a task' value={task}/>
        <input onChange={handleInputDate} id="duedate" type='date' value={dueDate}/>
        <button style={{padding:"5px",margin:"5px"}} onClick={handleDoneButton}>Done</button>

    </div>
  )
}

export default AddTask