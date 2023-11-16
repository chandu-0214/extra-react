import React, { useContext } from 'react'
import { userNameContext } from '../context/userData'

const ThirdChild = () => {
    const userContextData = useContext(userNameContext)
    console.log(userContextData)

  return (
    <div className='bg-danger p-2 m-2 '>
        <h2>ThirdChild</h2>
        <span className='text-bg-success  p-1 m-1 '>{userContextData}</span>
        <div className='bg-white text-black p-2 m-2 '>
            <label className='p-2 m-2 '>First Name</label>
            <input  className='p-2 m-2 ' type="text" placeholder='username'/>
            <button className='btn btn-outline-primary '>Change Username</button>
        </div>
    </div>
  )
}

export default ThirdChild