import React, { useContext } from 'react'
import ThirdChild from './ThirdChild'
import { userNameContext } from '../context/userData'

const SecoundChild = () => {

    const userContextData=useContext(userNameContext)
  return (
    <div className='bg-info  p-2 m-2'>
        <h2>Secound Child</h2>
        <span className='text-bg-success  p-2 m-2 '>{userContextData}</span>
        <ThirdChild/>
    </div>
  )
}

export default SecoundChild