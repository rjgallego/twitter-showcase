import React from 'react';
import Navbar from '../components/NavBar/NavBar.js';
import './PageLayout.css';

const PageLayout = ({children}) => {

    const handleScroll = () => {
        const textContent = document.querySelectorAll('.scroll-div')
            textContent.forEach((e, i) => {
                const top = (e.getBoundingClientRect().top);
                if(top < 200 && top > -150) {
                    e.classList.add('in-view')
                    if (e.classList.contains('end')) document.querySelector('.pointer').style.display = 'none';
                    else document.querySelector('.pointer').style.display = 'block';
                } else e.classList.remove('in-view');
            })
    }

    return (
        <React.Fragment>
            <div id="body">
                <Navbar />
                <div id="main-content" onScroll={handleScroll}>{children}</div>
                <div id="logo">DROPS</div>
            </div>
        </ React.Fragment>
    );
}

export default PageLayout;