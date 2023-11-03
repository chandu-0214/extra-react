import React from 'react'
import Child from './Child'

const Parent = () => {
     // below data is comming from API or some other way, It only and only comes in this component
     const Data= [12,36,89,36]
     const Token_ID = '$1458&78#@$88&'
 
  return (
    <div>
        <h2>Parent</h2>
        <Child parentData={Data} tId={Token_ID} />
    </div>
  )
}
export default Parent