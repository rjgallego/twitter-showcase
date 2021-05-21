import React from 'react';
import Navbar from './NavBar/NavBar.js';
import './PageLayout.css'

class PageLayout extends React.Component {
    render() {
        return (
            <div id="body">
                <Navbar />
                <div id="main-content"></div>
                <div id="logo">DROPS</div>
            </div>
        );
    }
}

export default PageLayout;