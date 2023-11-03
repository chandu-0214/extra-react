import React from 'react'

const ConditionalRendering = () => {
    // something should be rendered based on some condition
    let isRender = true
    const handleClickButton=()=>{
        console.log("Button clicked")
        isRender=false
        console.log(isRender)
    }
    
  return (
    <div>
        <h2>Conditional Rendering</h2>
        <p>Something should be rendered based on some condition</p>
        {console.log(isRender)}
        {isRender ? <h2>Rendered</h2> : <h2>Not Rendered</h2>}
        {/* {isRender && <h2>Rendered</h2>} */}
        
        <button onClick={handleClickButton}>Click</button>

    </div>
  )
// switch (day){
//     case "Monday":
//         return <h2>Monday</h2>
//     case "Tuesday": 
//         return  <h2>Tuesday</h2>
//     default:
//         return <h2>Not a Monday or Tuesday</h2> 
// }
}

export default ConditionalRendering