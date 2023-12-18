import React, { memo } from 'react'

const Count = (props) => {
    const {text,val}= props
    console.log("Count "+text+" rendered")
  return (
    <div>
        <p>{text}- {val}</p>
    </div>
  )
}

export default memo(Count)