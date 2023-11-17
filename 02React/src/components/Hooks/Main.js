import React, { useState } from 'react'
import FirstChild from './FirstChild'
import { UserNameContext } from '../context/userData'
import ThirdChild from './ThirdChild'
import SecoundChild from './SecoundChild'

const Main = () => {
  const [usermname, setUsermname] = useState("chandu1402")
      // this hook is needed for consume the context
  return (
    <div>
      <UserNameContext.Provider value={{setUsermname,usermname}}>
        <h2>Main</h2>
        <span className='text-bg-success  p-2 m-2 '>{usermname}</span>
        <FirstChild />
        <SecoundChild/>
        <ThirdChild/>
      </UserNameContext.Provider> 
     


      
         
    </div>
  )
}

export default Main