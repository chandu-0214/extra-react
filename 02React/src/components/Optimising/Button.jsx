import React, { memo } from 'react'

const Button = (props) => {
    const {text,handles}=props
    console.log("Button "+text+" rendered")

  return (
    <div>
        <button onClick={handles}>{text}</button>
    </div>
  )
}

export default memo(Button)