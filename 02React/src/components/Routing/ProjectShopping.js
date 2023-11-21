import React, { useState } from 'react'
import RouterFile from './RouterFile'
import { UserLoginData } from '../context/userData'

const ProjectShopping = () => {
    const [userName, setuserName] = useState(null)
  return (
    <div>
        <UserLoginData.Provider value={{userName,setuserName}}>
            <RouterFile/>
        </UserLoginData.Provider>
    </div>
  )
}

export default ProjectShopping