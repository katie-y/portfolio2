import React from 'react';
import {FaGithub, FaEnvelope, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return <div>
    <ul>
        <li><FaEnvelope id='footer-icon'/></li>
        <li><FaGithub id='footer-icon'/></li>
        <li><FaLinkedin id='footer-icon'/></li>
    </ul>

    </div>

}

export default Footer;