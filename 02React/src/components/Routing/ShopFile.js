import React, { useContext, useEffect } from 'react'
import HeaderFile from './HeaderFile'
import { useNavigate } from 'react-router'
import { UserLoginData } from '../context/userData'
import Shopping from '../State Management/Shopping'
import ShopPage from './ShopPage'


const ShopFile = () => {
  const navigate = useNavigate()
  const {userName} = useContext(UserLoginData)

  useEffect(()=>{
   {!userName &&  navigate('/login')}
  })

 
  return (
    <div>
        <HeaderFile/>
        <ShopPage/>

    </div>
  )
}

export default ShopFile