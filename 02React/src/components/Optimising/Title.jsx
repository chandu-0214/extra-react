import React, { memo } from 'react'

const Title = () => {
    console.log("Title rendered")
  return (
    <div>
        <h2>Use callback</h2>
    </div>
  )
}

export default memo(Title)