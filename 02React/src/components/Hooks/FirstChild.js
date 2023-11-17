import React, { useContext } from 'react'
import SecoundChild from './SecoundChild'
import { UserNameContext } from '../context/userData'

const FirstChild = () => {
  const userData = useContext(UserNameContext)

  return (
    <div className='bg-black text-white  p-2 m-2'>
        <h2 >First child </h2>
        <span className='text-bg-success  p-2 m-2 '>{userData.usermname}</span>
    </div>
  )
}

export default FirstChild