import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_TITLE } from './titleSlice'

const FormReduc = () => {
    const dispatch = useDispatch()
    const nameRef = useRef(null)
    const cityRef = useRef(null)

    const handleTitle=()=>{
        if(nameRef.current.value && cityRef.current.value){
        dispatch(CHANGE_TITLE({name:nameRef.current.value,city:cityRef.current.value}))
        nameRef.current.value=""
        cityRef.current.value=""
        }
        else {
            alert("Please select a city and Name ")
        }
    }
    const title = useSelector(store=>store.title)
  return (
    <div>
        <div>
        <label>Name</label>
        <input  ref={nameRef} type="text" placeholder='Name'/>
        </div>
        <div>
        <label>City</label>
        <input  ref={cityRef} type="text" placeholder='City'/>
        </div>
        <button onClick={handleTitle} type="button">Show Title</button>
        {title && <p>{title}</p>}
    </div>
  )
}

export default FormReduc