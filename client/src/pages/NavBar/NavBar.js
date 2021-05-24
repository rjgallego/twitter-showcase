import React from 'react';
import {Link} from 'react-router-dom';
import {changeElementClass} from '../../helpers';
import './NavBar.css'

const NavBar = () => {

    const handleClick = (event) => {
        changeElementClass(event.target.id, '.nav-option', 'selected')
    }

    return(
        <nav id="main">
            <Link to='/' id="home-link" className="nav-option selected" onClick={handleClick}>Home</Link>
            <Link to='/search' id="search-link" className="nav-option" onClick={handleClick}>Search</Link>
            <Link to='/discover' id="discover-link" className="nav-option" onClick={handleClick}>Discover</Link>
        </nav>
    )
    
}

export default NavBar;