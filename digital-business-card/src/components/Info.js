import React from 'react';
import me from '../images/me.jpg';
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';

function Info () {
    return (
        <div>
            <img className="picture-of-me" src={me} alt="Picture of me" />
            <h1 className="name-title">Kieran MacGough</h1>
            <p className="job-title">Frontend Developer</p>
            <p className="website">www.kieranmacgough.co.uk</p>
            <button className="email-button">
                <img className="email-img" src={email} alt="email"  />
                <p className='email-text'>Email</p>
            </button>
            <button className="linkedin-button">
                <img className="linkedin-img" src={linkedin} alt="email"  />
                <p className='linkedin-text'>LinkedIn</p>
            </button>
        </div>
    )
}

export default Info