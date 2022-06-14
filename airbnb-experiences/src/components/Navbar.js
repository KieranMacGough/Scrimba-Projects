import React from "react";
import logo from '../images/airbnb 1.png';

function Navbar () {
    return (
        <div className="navbar">
          <img className="nav-logo" src={logo} alt="airbnb logo" />
        </div>
    )
}

export default Navbar;