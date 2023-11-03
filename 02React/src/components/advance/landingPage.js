import React from 'react'
import './advance.css'

const LandingPage = () => {
  function addTwo(a, b) {
    console.log(a+b)
  }
  if(true){
    console.log("True")
  }
  for(let i=0; i<8; i++){
    console.log(i)
  }

  return (
    <div>
        <h2 className='heading'>Welcome</h2>
        <p>Book The Ticket soon</p>
        <button className='button'>Book Here</button>
    </div>
    
  )
}
export default LandingPage