import React, { useRef, useState } from 'react'
import HeaderFile from './HeaderFile'
import { userData } from './databaseFile'

const LoginFile = () => {
    const userNameRef= useRef(null)
    const passwordRef= useRef(null)
    const [errorState, setErrorState] = useState(null)

    const handleSignInButton=()=>{
        const usernameInput = userNameRef.current.value 
        const passwordInput = +passwordRef.current.value
    console.log(usernameInput,passwordInput)

        const filtereddata = userData.filter(eachObj=>{
            console.log(eachObj)
            console.log(eachObj.password===passwordInput)
            return (eachObj.username).toLocaleLowerCase()===usernameInput.toLocaleLowerCase() && eachObj.password===passwordInput
        })
        if(filtereddata.length===0){
            setErrorState("User Doesnot exist")
        }
        else{
            setErrorState(null)
        }
        console.log(filtereddata)

    }

  return (
    <div>
        <h2> Login Page </h2>
        <HeaderFile/>
        <div className='bg-success  border-dark p-5 m-5 text-white-50 '>
            <h2 className='text-black   p-2 m-2 '>Sign In</h2>
            <div>
                <label>Username</label>
                <input ref={userNameRef} className='p-2 m-2 rounded-3 ' type="text" placeholder="username"/>
            </div>
            <div>
                <label>Password</label>
                <input ref={passwordRef} className='p-2 m-2 rounded-3' type="password" placeholder="password"/>
            </div>
            <p className='text-white bg-danger '>{errorState}</p>
            <button onClick={handleSignInButton} className='btn btn-primary p-2 m-2'>Sign In</button>
        </div>

    </div>
  )
}

export default LoginFile