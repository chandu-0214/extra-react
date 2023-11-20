import React from "react";
import { Link } from "react-router-dom";

const HeaderFile = () => {
  return (
    <div className="d-flex justify-content-around  align-items-center ">
      <div>
        <img
          className="w-25 p-2 m-2"
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30143358/128.png"
          alt="shopping logo"
        />
      </div>
      <div className="d-flex justify-content-center align-items-center ">
        <Link to="/">
          <p className="p-1 m-1">Home</p>
        </Link>
        <Link to="/login">
          <p className="p-1 m-1">Login</p>
        </Link>
        <Link to="/shop">
          <p className="p-1 m-1">Shop</p>
        </Link>
        <Link to="/cart">
          <p className="p-1 m-1">Cart</p>
        </Link>
      </div>
    </div>
  );
};

export default HeaderFile;
