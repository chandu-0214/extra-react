import React, { useContext, useEffect } from 'react'
import HeaderFile from './HeaderFile'
import { useNavigate } from 'react-router'
import { UserLoginData } from '../context/userData'

const CartFile = () => {
  const navigate = useNavigate()
  const {userName} = useContext(UserLoginData)

  useEffect(()=>{
   {!userName &&  navigate('/login')}
  })

  return (
    <div>
        <h2>CartFile</h2>
        <HeaderFile/>
    </div>
  )
}

export default CartFile