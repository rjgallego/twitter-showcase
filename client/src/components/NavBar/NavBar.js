import React from 'react';
import './NavBar.css'

class NavBar extends React.Component {
    render() {
        return(
            <div id="main">
                <div class="nav-option selected">Home</div>
                <div class="nav-option">Search</div>
                <div class="nav-option">Discover</div>
            </div>
        )
    }
}

export default NavBar;