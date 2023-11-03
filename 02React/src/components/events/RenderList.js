import React from 'react'

const RenderList = () => {
  const namesArray =["Raju","Ram",'Raghav',"Ranjan"]
  // alert("You Are Going to Learn RenderList")
  // const name = prompt("Enter a name")
  const handleLi = (e) => {
    console.log(e.target.innerText + " Got clicked")
  }
  return (
    <div>
        <h2>RenderList</h2>
        <ol>
          {namesArray.map((name,index) => (
            <li key={index} onClick={handleLi}>{name}</li>
          ))}
        </ol>
    </div>
  )
}

export default RenderList