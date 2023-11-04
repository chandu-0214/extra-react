import React, { useState } from 'react'
import './Hooks.css';

const TodoItem = (props) => {
    const {id,taskName,iscomplete,dueDate,isImportant}=props?.eachTodo
    console.log(iscomplete)
    const handleCheckbox=(event)=>{
        console.log(event.target.checked)
        props.handleCheck(id)
    }
    const handleRemove=(event)=>{
        console.log("Remove")
        props.removeTodoItem(id)
    }

  return (
    <li className='listItems'>
        <div className='ItemConatiner'>
        {isImportant && <h2 className='prior'>*</h2>}
            <input onChange={handleCheckbox}type="checkbox" checked={iscomplete}/>
            <div>
                <p className='taskName'>{taskName}</p>
                <p className='duedate'>{"(  "+dueDate+" )"}</p>
            </div>
            <button onClick={handleRemove} className='remove'>Remove</button>
        </div>
    </li>
  )
}

export default TodoItem