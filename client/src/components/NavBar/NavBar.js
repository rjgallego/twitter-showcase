import React from 'react';
import './NavBar.css'

class NavBar extends React.Component {
    render() {
        return(
            <nav id="main">
                <div className="nav-option selected">Home</div>
                <div className="nav-option">Search</div>
                <div className="nav-option">Discover</div>
            </nav>
        )
    }
}

export default NavBar;