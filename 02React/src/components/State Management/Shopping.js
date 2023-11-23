import React, { useReducer } from 'react'
import ProductItem from './ProductItem'
import CartItems from './CartItems';
import modifiedDummyData from './data';


// Dummy Data is comming from the API

  console.log(modifiedDummyData)
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
          console.log(isIncludedInCart)
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
        default:
            return state
    }

  }


const Shopping = () => {
    const [state, dispatch] = useReducer(shoppingReducer, intialState)
  return (
    
    <div>
        <h2>Shopping</h2>
        <div>
        <h2>Product Page</h2>
        <ul className='d-flex justify-content-center align-items-center flex-wrap'>
          {modifiedDummyData.map(product=><ProductItem key={product.id}dispatch={dispatch}product={product}/>)}
        </ul>
      </div>
      <div>
        <h2>Cart Page</h2>
        <p>Total Items : {state.cartItems.length}</p>
        <p>Total Price : {Math.round(state.totalPrice)}</p>
        <div>
            Cart items
            <ul className='d-flex justify-content-center align-items-center flex-wrap'>
            {state.cartItems.map(product=><CartItems key={product.id} product={product} dispatch={dispatch}/>)}
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Shopping