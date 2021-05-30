import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {FiMenu} from 'react-icons/fi';
import {changeElementClass} from '../../helpers';
import './NavBar.css'

const NavBar = () => {
    const [isMenuShowing, setIsMenuShowing] = useState(false);

    useEffect(() => {
        changeElementClass(window.location.pathname, '.nav-option', 'selected')
    }, [])

    const handleClick = (event) => {
        changeElementClass(event.target.id, '.nav-option', 'selected')
    }

    const handleMobileClick = () => {
        if(isMenuShowing){
            document.getElementsByClassName("mobile")[0].classList.remove('full-screen')
            document.querySelectorAll('.nav-option').forEach(navOption => {
                navOption.classList.remove('visible');
            })
        } else {
            document.getElementsByClassName("mobile")[0].classList.add('full-screen')
            document.querySelectorAll('.nav-option').forEach(navOption => {
                navOption.classList.add('visible');
            })
        }
        setIsMenuShowing(!isMenuShowing);
    }

    return(
        <nav id="main">
            <div className="mobile" onClick={handleMobileClick}><FiMenu size="3em"/></div>
            <Link to='/' id="/" className="nav-option selected" onClick={handleClick}>Home</Link>
            <Link to='/search' id="/search" className="nav-option" onClick={handleClick}>Search</Link>
            <Link to='/discover' id="/discover" className="nav-option" onClick={handleClick}>Discover</Link>
        </nav>
    )
    
}

export default NavBar;