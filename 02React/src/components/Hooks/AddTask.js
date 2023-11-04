import React, { useState } from 'react'
import './Hooks.css';

const AddTask = (props) => {
    const [task, setTask] = useState('')
    const [isImportant, setIsImportant] = useState(false)

    const handleDoneButton=() => {
        console.log("Done button clicked")
        props.doneButton()
        task && props.addItemInTheContainer({
            taskName: task,
            iscomplete: false,
            dueDate: "",
            isImportant:isImportant
        })
    }
    const handleInputTask=(event) => {
        setTask(event.target.value)
    }
    const handleCheckbox=(event)=>{
        console.log(event.target.checked)
        setIsImportant(!isImportant)
        // props.handleCheck(id)
    }

  return (
    <div className='addtaskContainer'>
        <input  onChange={handleInputTask}className='taskInput' type="Text" placeholder='write a task' value={task}/>
        {/* <input onChange={handleInputDate} id="duedate" type='date' value={dueDate}/> */}
        <div>
            <input onChange={handleCheckbox}type="checkbox" checked={isImportant}/>
            <p className='duedate'>{isImportant?"High Priority":"Less Priority"}</p>

        </div>
        <button className='remove' style={{padding:"5px",margin:"5px",cursor:'pointer'}} onClick={handleDoneButton}>{task?"Done":"Cancel"}</button>

    </div>
  )
}

export default AddTask