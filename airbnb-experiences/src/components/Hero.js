import React from "react";
import GroupImage from '../images/Group 77.png';

function Hero () {
    return (
      <section className="Hero">
        <img className="hero-photo" src={GroupImage} alt="splash images" />
        <h1 className="hero-title">Online Experiences</h1>
        <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </section>  
    )
}

export default Hero;