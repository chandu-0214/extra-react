import React from 'react'

const ProductItem = (props) => {
    const {quantity,price,name,id}=props.product
    const handleAdd=()=>{
        console.log("Add triggered")
        props.dispatch({
            typeOfAction: "ADD_TO_CART",
            payload: props.product
        })
    }
  return (
    <li className='list-style'>
        <div className='d-flex justify-content-between border-3 rounded bg-light p-3 m-3 '>
            <h2 className=''>{name}</h2>
            <p>Rs {price} /-</p>
            <button onClick={handleAdd} className='btn btn-outline-success '>Add +</button>
        </div>

    </li>
  )
}

export default ProductItem