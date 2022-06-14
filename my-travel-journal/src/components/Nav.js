import React from 'react';
import logo from '../images/logo.svg';

function Nav() {
  return (
    <div className="Nav">
      <div className="nav--container">
        <img className="nav--logo" src={logo} alt="logo"/>
        <h3 className="nav--title">2022 CALENDAR</h3>
      </div>
    </div>
  );
}

export default Nav;
