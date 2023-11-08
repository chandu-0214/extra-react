import React from 'react'
import './shopping.css'

const CartItems = (props) => {
    const {quantity,price,title,image}=props.product
    const handleRemove=()=>{
        console.log("Add triggered")
        props.dispatch({
          typeOfAction: "REMOVE_FROM_CART",
          payload: props.product
      })
    }
  return (
     <li className='list-unstyled w-25 '>
     <div className='d-flex justify-content-between border-3 rounded bg-light p-3 m-3 flex-column'>
         <div className='d-flex justify-content-between border-3 rounded bg-light p-3 m-3 align-items-center '>
             <h5 className=''>{title}</h5>
             <img className="w-auto image-url" src={image}/>
         </div>
         <p>Rs {price} /-</p>
         <button onClick={handleRemove}className='btn btn-outline-success '>Remove - </button>

     </div>

 </li>
  )
}

export default CartItems