import React, { useState } from 'react'
import TodoItem from './TodoItem'
import AddTask from './AddTask'

const Todo = () => {
  
    const [isTaskShow,setIsTaskShow]=useState(false)
    const [Items, setItems] = useState([])
    const handleAddTask=()=>{
        setIsTaskShow(true)
    }
    const doneButton=()=>{
        setIsTaskShow(false)
    }
    const handleCheckBox=()=>{

    }


    const addItemInTheContainer=(newItem)=>{
        const newModifiedItem = {...newItem,id:Items.length+1}
        console.log(newModifiedItem)
        console.log(newItem)
        setItems([...Items,newModifiedItem])
    }


  return (
    <div>
        <h2>Todo</h2>
        <div>
            <button onClick={handleAddTask}>+ Add Task</button>
        </div>
       { isTaskShow && <AddTask doneButton={doneButton} addItemInTheContainer={addItemInTheContainer}/>}
       
        <div>
            <h1>Container</h1>
             <div>
            <ul>
            {Items.map(eachTodo=><TodoItem eachTodo={eachTodo} handleCheckBox={handleCheckBox}/>)}
            </ul>
        </div>
        </div>

    </div>
  )
}

export default Todo