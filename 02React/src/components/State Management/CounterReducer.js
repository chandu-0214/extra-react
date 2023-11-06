import React, { useReducer } from 'react'



const intialState=0
const CountReducer = (state,action)=>{
    // state got updated when u called disptach
    console.log("Reducer")
    console.log(state,action)
    // from this function always u should return state
    switch(action.type){
        case "Increment":
            return state+action.payload
        case "Decrement":
            return state-action.payload
        case "IncrementBy5":
            return state+action.payload
        case "Reset":
            return action.payload
        default:
            return state
    }

}
const CounterReducer = () => {
    const [state, dispatch] = useReducer(CountReducer, intialState)
    const handleIncrement=()=>{
        dispatch({
            type: "Increment",
            payload:1
        })
    }
    const handleDecrement=()=>{
        dispatch({
            type: "Decrement",
            payload:1
        })
    }
    const handleIncrementBy5=()=>{
        dispatch({
            type:"IncrementBy5",
            payload:5
        })

    }
    const handleReset=()=>{
        dispatch({
            type:"Reset",
            payload:0

        })
    }
    console.log(state)
   
  return (
    <div>
        <h2>CounterReducer</h2>
        <h1>Count = {state}</h1>
      <div>
        <button onClick={handleIncrement}>Inc</button>
        <button onClick={handleDecrement}>Dec</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrementBy5}>Increment by 5</button>

      </div>
    </div>
  )
}

export default CounterReducer