import React, { useEffect, useState } from 'react'

const Interval = () => {
    const [count,setCount]=useState(0)
    const handleButton=()=>{
        setCount(count+1)
    }
    console.log("first")
   

    useEffect(()=>{
        const fetching=()=>{
            // fetch API calls
        // data is came after 2 min
        console.log("Data was recieved")
        // this data will store in state variable and here we will update by using state setter function

        }
        fetching()
    })
  return (
    <div>
    {console.log("Third")}
        <h2>Interval</h2>
        <button onClick={handleButton} className='btn btn-outline-danger '>Click-{count}</button>
    </div>
  )
}

export default Interval