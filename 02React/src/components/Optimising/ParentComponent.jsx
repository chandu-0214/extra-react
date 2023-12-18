import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

const ParentComponent = () => {
    const [age, setAge] = useState(20)
    const [salary, setSalary] = useState(1000)

    // const handleIncreseSalary = ()=>{
    //     setSalary(salary+500)
    // }
    const handleIncreseSalary = useCallback(
      () => {
        setSalary(salary+500)
      },
      [salary],
    )
    
    const handleIncreseAge = useCallback(
        () => {
            setAge(age+1)
        },
        [age],
      )
    // const handleIncreseAge = ()=>{
    //     setAge(age+1)

    // }

  return (
    <div>
        <Title/>
        <Count text={"Age"} val ={age}/>
        <Button text="Increse age" handles={handleIncreseAge}/>
        <Count text={"Salary"} val ={salary}/>
        <Button text="Increse salary" handles={handleIncreseSalary}/>
    </div>
  )
}

export default ParentComponent