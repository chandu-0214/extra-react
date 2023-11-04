import React, { useState } from 'react'
import TodoItem from './TodoItem'
import AddTask from './AddTask'
import CompleteTodoItem from './CompleteTodoItem'

// config.
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const Todo = () => {
    const [isTaskShow,setIsTaskShow]=useState(false)
    const [Items, setItems] = useState([])
    const [searchTodoItems, setSearchTodoItems] = useState([])
    const [completedItems, setCompletedItems] = useState([])
    const [isSort, setisSort] = useState(false)
    const handleAddTask=()=>{
        setIsTaskShow(true)
    }
    const doneButton=()=>{
        setIsTaskShow(false)
    }
    const handleCheck=(id)=>{
        const checkedItems = Items.filter(eachTodo=>eachTodo.id===id)
        const newModifiedItem = {...checkedItems[0], iscomplete:!checkedItems[0].iscomplete}
        const uncheckedItems = Items.filter(eachTodo=>eachTodo.id !== id)
        setItems([...uncheckedItems])
        setSearchTodoItems([...uncheckedItems])
        setCompletedItems([...completedItems,newModifiedItem])
        setisSort(false)
        console.log(newModifiedItem)
    }
    const removeTodoItem =(id)=>{
        console.log(id)
        const filteredTodoItems = Items.filter(eachTodoItem=>eachTodoItem.id !== id)
        console.log(filteredTodoItems)
        setItems(filteredTodoItems)
        setSearchTodoItems(filteredTodoItems)
        setisSort(false)
    }

    const addItemInTheContainer=(newItem)=>{
        let newModifiedItem
        let todayDate = new Date();
        todayDate=todayDate.toLocaleDateString(undefined, options);
        newModifiedItem = {...newItem,id:Math.random(),dueDate:todayDate}
        console.log(newModifiedItem)
        console.log(newItem)
        setItems([...Items,newModifiedItem])
        setSearchTodoItems([...Items,newModifiedItem])
        setisSort(false)


    }

    const handleSearch=(event)=>{
        console.log(event.target.value)
        const searchTodoItems = Items.filter(eachTodoItem =>((eachTodoItem.taskName).toLowerCase()).includes((event.target.value).toLowerCase()))
        console.log(searchTodoItems)
        setSearchTodoItems(searchTodoItems)
        setisSort(false)
    }

    const removeFromCompletedTodoItems = (id) =>{
        console.log(id)
        const filteredTodoItems = completedItems.filter(eachTodoItem=>eachTodoItem.id !== id)
        console.log(filteredTodoItems)
        setCompletedItems(filteredTodoItems)
        setisSort(false)
    }

    const handleSort=()=>{
        const lowPriorityTodoItems = searchTodoItems.filter(eachTodoItem=>!eachTodoItem.isImportant)
        const highPriorityTodoItems = searchTodoItems.filter(eachTodoItem=>eachTodoItem.isImportant)
        setSearchTodoItems([...highPriorityTodoItems, ...lowPriorityTodoItems])
        setisSort(true)
    }

    const handleDeleteAll=() => {
        setCompletedItems([])
    }



  return (
    <div style={{textAlign:"center"}}>
        <h2>Todo</h2>
        <div style={{textAlign:"center"}} className='TaskContainer'>
            <button className='remove' onClick={handleAddTask}>+ Add Task</button>
            { isTaskShow && <AddTask doneButton={doneButton} addItemInTheContainer={addItemInTheContainer}/>}
        </div>
        <div >
        <div className='ContainerMain'>
            <div className='Container' style={{borderColor: "lightcoral"}}>
            <div>
           { Boolean(searchTodoItems.length) && <input onChange={handleSearch} className="search" type="search" placeholder='search......'/>}
           {Boolean(searchTodoItems.length) && <button onClick={handleSort} className='remove'>{isSort?"Sorted":"Sort"}</button>}
            </div>
                <h2>Incomplete Task</h2>
            <ul style={{textAlign:"center"}} className='UlItems'>
            {searchTodoItems.length?searchTodoItems.map(eachTodo=><TodoItem key={eachTodo.id} eachTodo={eachTodo} handleCheck={handleCheck} removeTodoItem={removeTodoItem} />):"No Tasks Available"}
            </ul>
            {Boolean(searchTodoItems.length) && <div><h2 className='prior'>*</h2><span>High Priority Tasks</span></div>}
            </div>
        <div className='Container' style={{borderColor: "green"}}>
            <div className='delteAllContainer'>
            <h2>Completed Task</h2>
            {Boolean(completedItems.length) && <button className='remove' onClick={handleDeleteAll}>Delete All</button>}
            </div>
            <ul className='UlItems'>
            {completedItems.length?completedItems.map(eachTodo=><CompleteTodoItem key={eachTodo.id} eachTodo={eachTodo} removeFromCompletedTodoItems={removeFromCompletedTodoItems}/>):"No Tasks Available"}
            </ul>
        </div>
        </div>
        </div>

    </div>
  )
}

export default Todo