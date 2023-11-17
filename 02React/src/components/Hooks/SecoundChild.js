import React, { useContext } from 'react'
import ThirdChild from './ThirdChild'
import { UserNameContext } from '../context/userData'

const SecoundChild = () => {
  const userdata = useContext(UserNameContext)

  return (
    <div className='bg-info  p-2 m-2'>
        <h2>Secound Child</h2>
        <span className='text-bg-success  p-2 m-2 '>{userdata.usermname}</span>
        
    </div>
  )
}

export default SecoundChild