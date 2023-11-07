import React, { useReducer } from 'react'
import ProductItem from './ProductItem'
import CartItems from './CartItems';


// Dummy Data is comming from the API
const DummyData = [
    { id: Math.random(), name: "Car", price: 100, quantity: 1 },
    { id: Math.random(), name: "A/C", price: 50, quantity: 1 },
    { id: Math.random(), name: "Bike", price: 200, quantity: 1 },
    { id: Math.random(), name: "Train", price: 500, quantity: 1 }
  ];
  const intialState={
    cartItems:[],
    totalPrice:0
  }

  const shoppingReducer=(state,action)=>{
    // where the state is updated
    // actions ADD and another REMOVE
    console.log(action)
    console.log(state)
    switch(action.typeOfAction){
        case 'ADD':
            return {
                cartItems:[action.payload],
                totalPrice:action.payload.price
              }
        case "REMOVE":
            return {
                cartItems:[],
                totalPrice:0
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
        <ul>
          {DummyData.map(product=><ProductItem key={product.id}dispatch={dispatch}product={product}/>)}
        </ul>
      </div>
      <div>
        <h2>Cart Page</h2>
        <p>Total Items : {state.cartItems.length}</p>
        <p>Total Price : {state.totalPrice}</p>
        <div>
            Cart items
            <ul>
            {state.cartItems.map(product=><CartItems key={product.id} product={product} dispatch={dispatch}/>)}
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Shopping