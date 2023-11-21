import React, { useContext, useEffect } from 'react'
import HeaderFile from './HeaderFile'
import { useNavigate } from 'react-router'
import { UserLoginData } from '../context/userData'
import Shopping from '../State Management/Shopping'


const ShopFile = () => {
  const navigate = useNavigate()
  const {userName} = useContext(UserLoginData)

  useEffect(()=>{
   {!userName &&  navigate('/login')}
  })

 
  return (
    <div>
        <HeaderFile/>
        <h2>ShopFile</h2>
        <Shopping/>

    </div>
  )
}

export default ShopFile