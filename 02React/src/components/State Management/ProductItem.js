import React from 'react'
import './shopping.css'
const ProductItem = (props) => {
    const {description,price,title,image,rating}=props.product
    const handleAdd=()=>{
        console.log("Add triggered")
        props.dispatch({
            typeOfAction: "ADD_TO_CART",
            payload: props.product
        })
    }
  return (
    <li className='list-unstyled w-25 '>
        <div className='d-flex justify-content-between border-3 rounded bg-light p-3 m-3 flex-column'>
            <div className='d-flex justify-content-between border-3 rounded bg-light p-3 m-3 align-items-center '>
                <h5 className=''>{title}</h5>
                <img className="w-auto image-url" src={image} alt={title}/>
            </div>
            <p>Rs {price} /-</p>
            {/* <p>{description}</p> */}
           <div className='d-flex justify-content-between border-3 rounded bg-light p-3 m-3 '>
            <div>
                <p>{rating.rate} <span> ( {rating.count} )</span></p>
            </div>
           <button onClick={handleAdd} className='btn btn-outline-success '>Add +</button>
           </div>
        </div>

    </li>
  )
}

export default ProductItem