import React, { useContext } from 'react'
import SecoundChild from './SecoundChild'
import { userNameContext } from '../context/userData'

const FirstChild = () => {
    const userContextData=useContext(userNameContext)

  return (
    <div className='bg-black text-white  p-2 m-2'>
        <h2 >First child </h2>
        <span className='text-bg-success  p-2 m-2 '>{userContextData}</span>
        <SecoundChild/>
    </div>
  )
}

export default FirstChild