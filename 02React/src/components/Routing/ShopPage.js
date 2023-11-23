import React, { useContext } from 'react'
import modifiedDummyData from '../State Management/data'
import ProductItem from '../State Management/ProductItem'
import { UserCartData } from '../context/userData'



const ShopPage = () => {
    const {dispatch}=useContext(UserCartData)
  return (
    <div>
        <div>
        <h2>Product Page</h2>
        <ul className='d-flex justify-content-center align-items-center flex-wrap'>
          {modifiedDummyData.map(product=><ProductItem key={product.id} dispatch={dispatch}product={product}/>)}
        </ul>
      </div>
    </div>
  )
}

export default ShopPage