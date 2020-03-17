import React from 'react';
import { Link } from "react-router-dom";


const NavBar = () => {
    return <nav className='nav-bar'>
                <Link to='/'> Katie </Link>
                <Link to='/about'>About </Link>
                <Link to='/projects'>Projects </Link>
                <Link to='/contact' > Contact </Link>
    </nav>

}

export default NavBar;