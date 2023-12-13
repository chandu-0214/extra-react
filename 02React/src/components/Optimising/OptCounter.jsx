import React, { useMemo, useState } from 'react'

const OptCounter = () => {
    const [count, setCount] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const handleButtonOne=() =>{
        console.log("Handlebutton trigered")
        // all state update function are asynchronous
        // to update the setter function = Direct updatation and call back updation
        setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count=>count+1)
        // setCount(count=>count+1)
        // setCount(count=>count+1)
    }
    const handleButtonTwo=() =>{
        console.log("handleButtonTwo")
        setCountTwo(countTwo+1)

    }

    // const isEvenNumber = ()=>{
    //     let i=0
    //     while(i<2000000000) i++
    //     console.log("Rendered Even Function")

    //     return count%2===0

    // }
    const isEvenNumber = useMemo(() => {
        let i=0
        while(i<2000000000) i++
        console.log("Rendered Even Function")

        return count%2===0

    }, [count])



  return (
    <div>
        <h2>Optimising The App</h2>

        <div>
            <button onClick={handleButtonOne}>{`Counter One - ${count}`}</button>
            <span>{isEvenNumber ? "Even":"Odd"}</span>
            <button onClick={handleButtonTwo}>{`Counter Two - ${countTwo}`}</button>
        </div>
    </div>
  )
}

export default OptCounter