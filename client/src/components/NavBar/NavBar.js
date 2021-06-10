import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import {FiMenu} from 'react-icons/fi';
import './NavBar.css'

const NavBar = () => {
    const [isMenuShowing, setIsMenuShowing] = useState(false);

    const handleClick = () => setIsMenuShowing(false);
    const handleMobileClick = () => setIsMenuShowing(!isMenuShowing);

    return(
        <nav id="main">
            <div className={`mobile ${isMenuShowing ? 'full-screen': ''}`} onClick={handleMobileClick}><FiMenu size="3em"/></div>
            <NavLink exact to='/' id="/" className={`nav-option ${isMenuShowing ? 'visible' : ''}`} activeClassName="selected" onClick={handleClick}>Home</NavLink>
            <NavLink to='/search' id="/search" className={`nav-option ${isMenuShowing ? 'visible' : ''}`} activeClassName="selected" onClick={handleClick}>Search</NavLink>
            <NavLink to='/discover' id="/discover" className={`nav-option ${isMenuShowing ? 'visible' : ''}`} activeClassName="selected" onClick={handleClick}>Discover</NavLink>
        </nav>
    )
    
}

export default NavBar;