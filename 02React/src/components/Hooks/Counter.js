import React, { useState } from 'react'
import './Hooks.css';
const Counter = (props) => {

    // hooks(React functions/Js functions) are special functions in React
    const [count,setCount]=useState(0)
    const handleIncrement = () => {
      setCount(count+1) 
    }
    const handleDecrement = () => {
      setCount(count-1)
  }
  const handleReset = () => {
    setCount(0)
}
  return (
    <div>
        <h2 className='heading'>Counter-{props.id}</h2>
        <h1 style={{color:props.colr}}>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter