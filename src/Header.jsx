import React from "react";
import logo from "./Images/logo.png";
const Header =()=>{
  return(
    <>
    <div className="header">
        <img src={logo} alt="logo" width="130" height="55"/>
    <h1> 😭 Note App</h1>
    </div>
    </>
  )
}
export default Header;