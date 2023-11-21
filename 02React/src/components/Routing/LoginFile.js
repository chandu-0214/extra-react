import React, { useContext, useRef, useState } from "react";
import HeaderFile from "./HeaderFile";
import { userData } from "./databaseFile";
import { useNavigate } from "react-router";
import { UserLoginData } from "../context/userData";

const LoginFile = () => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorState, setErrorState] = useState(null);
  const {userName,setuserName} = useContext(UserLoginData)
  const [isSign, setisSign] = useState(true);

  const navigate=useNavigate()

  const handleSignInButton = () => {
    const usernameInput = userNameRef.current.value;
    const passwordInput = +passwordRef.current.value;
    console.log(usernameInput, passwordInput);

    const filtereddata = userData.filter((eachObj) => {
      return (
        eachObj.username.toLocaleLowerCase() ===
          usernameInput.toLocaleLowerCase() &&
        eachObj.password === passwordInput
      );
    });
    if (filtereddata.length === 0) {
      setErrorState("User Doesnot exist");
    } else {
      if (filtereddata) {
        setErrorState(null);
        setisSign(false);
        setuserName(userNameRef.current.value)
      }
    }
    console.log(filtereddata);
  };
  const handleContinue=()=>{
    console.log("shop page")
    console.log(navigate)
    // maintain the data in context- (Rahul did logged in )
    navigate('/shop');
  }

  return (
    <div className="text-text-center ">
      <h2> Login Page </h2>
      <HeaderFile />
      {isSign && (
        <div className="bg-success w-50 border-dark p-5 m-5 text-white-50 ">
          <h2 className="text-black   p-2 m-2 ">Sign In</h2>
          <div>
            <label>Username</label>
            <input
              ref={userNameRef}
              className="p-2 m-2 rounded-3 "
              type="text"
              placeholder="username"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              ref={passwordRef}
              className="p-2 m-2 rounded-3"
              type="password"
              placeholder="password"
            />
          </div>
          <p className="text-white bg-danger ">{errorState}</p>
          <button
            onClick={handleSignInButton}
            className="btn btn-primary p-2 m-2"
          >
            Sign In
          </button>
        </div>
      )}
      {!isSign && (
        <div className="bg-success w-50 border-dark p-5 m-5 text-white-50">
            <p>{"Hi "+userName.toUpperCase()+", "}</p>
          <h2>Your Are Successfully Logged In..!!</h2>
          <button onClick={handleContinue} className="btn btn-primary p-2 m-2">Continue Shopping...</button>
        </div>
      )}
    </div>
  );
};

export default LoginFile;
