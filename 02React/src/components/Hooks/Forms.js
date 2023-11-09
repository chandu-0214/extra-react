import React, { useRef, useState } from 'react'

const Forms = () => {
    // const [name, setname] = useState('Shekhar')
    const inputRef = useRef("")  // intial current value
    const buttonRef = useRef("")  // intial current value
    const nameRef = useRef("")  // intial current value

    const handleInput=(event)=>{
        console.log(event.target.value);
        // setname(event.target.value);
       
    }

    const handleButton=()=>{
        const inputEl = document.getElementById("inputName")
        // console.log(inputEl)
        inputEl.value="Chandu"
        inputRef.current.value="Shekhar"
        console.log(inputRef.current)
        console.log(buttonRef.current)
        console.log(nameRef.current)

    }
    
// inputRef.current.focus()

  return (
    <div>
        <h2 className='p-2 m-2'>Forms</h2>
        <div>
            <label ref={nameRef} className='p-2 m-2'>Name</label>
            <input ref={inputRef} id="inputName" className='p-2 m-2 form-control-bg-info  w-50'type="text" name="name" onChange={handleInput} />
            <button  ref={buttonRef} onClick={handleButton} className='btn btn-primary'>Click</button>
             <p>Current State ={"cha"}</p>  {/* // useState */}
            <p>previous  State ={"ch"}</p>  {/* // useRef */}
        </div>
    </div>
  )
}

export default Forms 

// JSX---(Babel)------>React code ------(Babel+react-dom)------> JS code-------> easily understand the browser
