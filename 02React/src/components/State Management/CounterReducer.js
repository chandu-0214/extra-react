import React, { useReducer } from 'react'



const intialState=0
const CountReducer = (state,action)=>{
    // state got updated when u called disptach
    console.log("Reducer")
    console.log(state,action)
    // from this function always u should return state
    switch(action){
        case "Increment":
            return state+1 
        case "Decrement":
            return state-1 
        default:
            return state
    }

}
const CounterReducer = () => {
    const [state, dispatch] = useReducer(CountReducer, intialState)
    const handleIncrement=()=>{
        dispatch("Increment")
    }
    const handleDecrement=()=>{
        dispatch("Decrement")
    }
    const handleReset=()=>{}
    console.log(state)
   
  return (
    <div>
        <h2>CounterReducer</h2>
        <h1>Count = {state}</h1>
      <div>
        <button onClick={handleIncrement}>Inc</button>
        <button onClick={handleDecrement}>Dec</button>
        <button onClick={handleReset}>Reset</button>

      </div>
    </div>
  )
}

export default CounterReducer