import React from 'react';
import '../index.css';
import logo from '../logo.svg';

function Header() {
    return (
      <header className="header">
        <nav className="nav">
          <img className="logo" src={logo} alt="logo" />
          <h3>ReactFacts</h3>
          <h4>React Course - Project 1</h4>
        </nav>
      </header>
    )
  }

export default Header