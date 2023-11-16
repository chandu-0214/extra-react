import React, { useContext } from 'react'
import FirstChild from './FirstChild'
import { userNameContext } from '../context/userData'

const Main = () => {
    const userContextData = useContext(userNameContext)
  return (
    <div>
        <h2>Main</h2>
        <span className='text-bg-success  p-2 m-2 '>{userContextData}</span>
        <FirstChild />
    </div>
  )
}

export default Main