import React from 'react'
import Child3 from './Child3'

const Child2 = (props) => {
    console.log(props)
    const {tokenId,parentData}=props
  return (
    <div>
        <h2>child2</h2>
        <Child3 tokenId={tokenId} parentData={parentData}/>
    </div>
  )
}

export default Child2