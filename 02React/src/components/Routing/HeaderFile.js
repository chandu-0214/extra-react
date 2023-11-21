import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserLoginData } from "../context/userData";

const HeaderFile = () => {
  const { userName, setuserName } = useContext(UserLoginData);
  const handleLogout = () => {
    setuserName(null);
  };
  return (
    <div className="d-flex justify-content-around  align-items-center ">
      <div>
        <img
          className="w-25 p-2 m-2"
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30143358/128.png"
          alt="shopping logo"
        />
      </div>
      <div className="d-flex flex-column  justify-content-center align-items-center">
        <div>
          {userName && <p className="bg-secondary p-2 m-2 rounded-3 ">Hi, {userName?userName.toUpperCase():null}</p>}
        </div>
        <div className="d-flex justify-content-center align-items-center ">
          <Link to="/">
            <p className="p-1 m-1">Home</p>
          </Link>
          <Link onClick={handleLogout} to="/login">
            <p className="p-1 m-1">{!userName ? "Login" : "Logout"}</p>
          </Link>
          <Link to="/shop">
            <p className="p-1 m-1">Shop</p>
          </Link>
          <Link to="/cart">
            <p className="p-1 m-1">Cart</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderFile;
