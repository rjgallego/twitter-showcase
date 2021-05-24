import React from 'react';
import Navbar from '../components/NavBar/NavBar.js';
import './PageLayout.css'

const PageLayout = ({children}) => {
    return (
        <React.Fragment>
            <div id="body">
                <Navbar />
                <div id="main-content">{children}</div>
                <div id="logo">DROPS</div>
            </div>
        </ React.Fragment>
    );
}

export default PageLayout;