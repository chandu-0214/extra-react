import React from 'react'

const CartItems = (props) => {
    const {quantity,price,name,id}=props.product
    const handleRemove=()=>{
        console.log("Add triggered")
        props.dispatch("Remove")
    }
  return (
    <li className='list-style'>
        <div className='d-flex justify-content-between border-3 rounded bg-light p-3 m-3 '>
            <h2 className=''>{name}</h2>
            <p>Rs {price} /-</p>
            <button onClick={handleRemove}className='btn btn-outline-success '>Remove - </button>
        </div>

    </li>
  )
}

export default CartItems