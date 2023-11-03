import React from 'react'
import RenderList from './RenderList'

const Home = () => {
    // const buttonEl = document.getElementById("button")
    // buttonEl.addEventListener("click", () =>   {
    //     console.log("Button Clicked")
    // })
    const handleButton = () => {
        console.log("Button Clicked")
    }
    const handleInput = (event) => {
        console.log(event.target.value)
    }
  return (
    <div>
        <h2 >Home</h2>
        <p>Welcome to My Home..!!!!!</p>
        <button id="button" onClick={handleButton}>Get Started</button>
        <div>
            <label htmlFor="input">Name</label>
            <input onChange={handleInput} id="input" type="text" placeholder='Enter Your Name'/>
        </div>
    </div>
  )
}

export default Home