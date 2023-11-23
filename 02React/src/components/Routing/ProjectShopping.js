import React, { useReducer, useState } from 'react'
import RouterFile from './RouterFile'
import { UserCartData, UserLoginData } from '../context/userData'

const intialState={
  cartItems:[],
  totalPrice:0
}

const shoppingReducer=(state,action)=>{
  // where the state is updated
  // actions ADD and another REMOVE
  switch(action.typeOfAction){
      case 'ADD_TO_CART':
        // can we check the payload here in state.cartItems
        const isIncludedInCart = state.cartItems.find(item => item.id === action.payload.id)
        if(isIncludedInCart){
          console.log("New code")
          console.log(isIncludedInCart)
          const modifyPayload = {...isIncludedInCart,quantity:isIncludedInCart.quantity+1}
          console.log(modifyPayload)
          let removePreviousItes = state.cartItems.filter(item => item.id !== isIncludedInCart.id)
          const newUpadtedState=[...removePreviousItes,modifyPayload]
          const newUpdatedPrice=state.totalPrice+action.payload.price
          return {
            cartItems:newUpadtedState,
            totalPrice:newUpdatedPrice
          }
        }
        const updatedCart=[...state.cartItems,action.payload]
        const updatedTotalPrice= state.totalPrice+action.payload.price
          return {
              cartItems:updatedCart,
              totalPrice:updatedTotalPrice
            }
      case "REMOVE_FROM_CART":
        // can we check the payload here in state.cartItems
        const isIncludedInCartForRemove = state.cartItems.find(item => item.id === action.payload.id)
        const {quantity}=isIncludedInCartForRemove
        if(quantity>1){
          console.log(isIncludedInCartForRemove)
          const modifyPayloadRemove = {...isIncludedInCartForRemove,quantity:isIncludedInCartForRemove.quantity-1}
          let removePreviousItesRemove = state.cartItems.filter(item => item.id !== isIncludedInCartForRemove.id)
          const modifyCartItem=[...removePreviousItesRemove,modifyPayloadRemove]
          const modifyPrice= state.totalPrice - action.payload.price
          return {
            cartItems:modifyCartItem,
            totalPrice:modifyPrice
          }
        }

        const updatedCartRemove = state.cartItems.filter(item=>item.id !== action.payload.id)
        const updatedTotalPriceRemove = state.totalPrice - action.payload.price
        return {
          cartItems:updatedCartRemove,
          totalPrice:updatedTotalPriceRemove
        }
      case "CLEAR_THE_CART":
        return {
          cartItems:[],
          totalPrice:0
        }
      default:
          return state
  }

}
const ProjectShopping = () => {
    const [userName, setuserName] = useState(null)
    const [state, dispatch] = useReducer(shoppingReducer, intialState)

  return (
    <div>
        <UserLoginData.Provider value={{userName,setuserName}}>
          <UserCartData.Provider value={{state,dispatch}} >
              <RouterFile/>
          </UserCartData.Provider>
        </UserLoginData.Provider>
    </div>
  )
}

export default ProjectShopping