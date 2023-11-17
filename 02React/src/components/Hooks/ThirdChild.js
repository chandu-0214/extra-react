import React, { useContext, useState } from 'react'
import { UserNameContext } from '../context/userData'

const ThirdChild = () => {
  const userdata = useContext(UserNameContext)
  const [serachInputVal, setSerachInputVal] = useState('')
  console.log(userdata)
  const handleUsername=()=>{
    userdata.setUsermname(serachInputVal)
  }
  const handleInput=(event)=>{
    setSerachInputVal(event.target.value)
    userdata.setUsermname((event.target.value))

  }

  return (
    <div className='bg-danger p-2 m-2 '>
        <h2>ThirdChild</h2>
        <span className='text-bg-success  p-1 m-1 '>{userdata.usermname}</span>
        <div className='bg-white text-black p-2 m-2 '>
            <label className='p-2 m-2 '>First Name</label>
            <input  onChange={handleInput}className='p-2 m-2 ' type="text" placeholder='username' value={serachInputVal}/>
            <button onClick={handleUsername} className='btn btn-outline-primary '>Change Username</button>
        </div>
    </div>
  )
}

export default ThirdChild