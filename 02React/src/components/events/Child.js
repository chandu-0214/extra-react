import React from 'react'
import Child2 from './child2'

const Child = (props) => {
    // props is a object
    const {tId,parentData}=props
    console.log(props)
   
  return (
    <div>
        <h2>Child</h2>
        <p>Token Id = {tId}</p>
        <ul>
            {parentData.map((item,index,arr) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <Child2 tokenId={tId} parentData={parentData}/>
    </div>
  )
}

export default Child