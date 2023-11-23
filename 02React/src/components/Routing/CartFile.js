import React, { useContext, useEffect } from 'react'
import HeaderFile from './HeaderFile'
import { useNavigate } from 'react-router'
import { UserCartData, UserLoginData } from '../context/userData'
import CartItems from '../State Management/CartItems'

const CartFile = () => {
  const navigate = useNavigate()
  const {userName} = useContext(UserLoginData)
  const {dispatch,state}=useContext(UserCartData)


  useEffect(()=>{
   {!userName &&  navigate('/login')}
  })

  return (
    <div>
        <h2>CartFile</h2>
        <HeaderFile/>
        <p>Total Items : {state.cartItems.length}</p>
        <p>Total Price : {Math.round(state.totalPrice)}</p>
        <div>
            Cart items
            <ul className='d-flex justify-content-center align-items-center flex-wrap'>
            {state.cartItems.map(product=><CartItems key={product.id} product={product} dispatch={dispatch}/>)}
            </ul>
        </div>
    </div>
  )
}

export default CartFile