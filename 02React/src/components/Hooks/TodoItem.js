import React, { useState } from 'react'
import './Hooks.css';

const TodoItem = (props) => {
    const {id,taskName,iscomplete}=props.eachTodo
    const [isChecked,setIsChecked]=useState(iscomplete)
    const handleCheckbox=(event)=>{
        console.log(event.target.checked)
        setIsChecked(!isChecked)
    }
  return (
    <li className='listItems'>
        <div className='ItemConatiner'>
            <input onChange={handleCheckbox}type="checkbox" checked={isChecked}/>
            <p>{taskName}</p>
            <button>Remove</button>
        </div>
    </li>
  )
}

export default TodoItem