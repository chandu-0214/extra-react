import React from 'react'

const CompleteTodoItem = (props) => {
  const handleRemove=()=>{
    props.removeFromCompletedTodoItems(props.eachTodo.id)
  }
  return (

         <li className='listItems'>
        <div className='ItemConatiner'>
            <p className='taskName'>{props.eachTodo.taskName}</p>
            <button className='remove' onClick={handleRemove}>Delete</button>
        </div>
    </li>
  )
}

export default CompleteTodoItem