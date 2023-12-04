import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT, RESET } from './counterSlice'
import { CHANGE_HEADING } from './headingSlice'
import FormReduc from './FormReduc'

const CounterRedux = () => {
   const dispatch =  useDispatch()
   const countVal = useSelector(store=>store.counter)
   const headingVal = useSelector(store=>store.heading)
   const inputRef = useRef(null)
   console.log(headingVal)

    const handleIncrement=()=>{
        dispatch(INCREMENT(1))

    }
    const handleDecrement=()=>{
        dispatch(DECREMENT(1))
        
    }
    const handleReset=()=>{
        dispatch(RESET())
    }
    const handleChangeHeading=()=>{
        console.log(inputRef.current.value)
        dispatch(CHANGE_HEADING(inputRef.current.value))

    }
  return (
    <div>
        <h2>{headingVal}</h2>
        <h1>{countVal}</h1>
        <div>
            <button onClick={handleIncrement}>Increment </button>
            <button onClick={handleDecrement}>Decrement </button>
            <button onClick={handleReset}>Reset </button>
        </div>
        <div>
            <label>Change Heading</label>
            <input  ref={inputRef} type="text" placeholder='Change Heading'/>
            <button onClick={handleChangeHeading}>Change Heading</button>
        </div>
        <FormReduc/>
    </div>
  )
}

export default CounterRedux