import React from 'react';
import twIcon from '../images/Twitter Icon.png';
import fbIcon from '../images/Facebook Icon.png';
import inIcon from '../images/Instagram Icon.png';
import ghIcon from '../images/GitHub Icon.png';

function Footer () {
    return (
        <div className="footer">
            <img className="tw-icon" src={twIcon} alt="Twitter Logo" />
            <img className="fb-icon" src={fbIcon} alt="Facebook Logo" />
            <img className="in-icon" src={inIcon} alt="Instagram Logo" />
            <img className="gh-icon" src={ghIcon} alt="GitHub Logo" />
        </div>
    )
}

export default Footer
