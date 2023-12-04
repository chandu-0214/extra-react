import React from 'react'
import './testFile.css'
import moduleStyles from './newTestFile.module.css'

const TestFile = () => {
  console.log(moduleStyles)
  return (
    <div>
        <h1 className='heading'>This is Test File </h1>
        <h1 className={moduleStyles.moduleHeading}>This is New Module Test File </h1>
        <h1 className={moduleStyles.moduleHeading}>This is New Module Test File </h1>


    </div>
  )
}

export default TestFile