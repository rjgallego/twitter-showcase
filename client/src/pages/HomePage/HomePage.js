import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

import './HomePage.css';

const HomePage = () => {


    useEffect(() => {
        setScrollListener();
    }, [])

    const setScrollListener = () => {
        const container = document.getElementById('main-content');
        const textContent = document.querySelectorAll('.text-div')
        container.addEventListener('scroll', () => {
            textContent.forEach((e, i) => {
                const top = (e.getBoundingClientRect().top);
                if(top < 200 && top > -150) {
                    e.classList.add('in-view')
                    setInvisibleClass(e)
                } else {
                    e.classList.remove('in-view');
                }
            })
        })
    }

    const setInvisibleClass = (element) => {
        const pointer = document.getElementById('pointer');
        if(element.id === 'discover-div'){
            pointer.style.display = 'none';
            return;
        }
        pointer.style.display = 'block';
    }

    return (
        <div id="home-content">
            <div id="title" className="text-div in-view">
                <div id="sub-title">Using Twitter to Discover</div>
                <div id="main-title">Electronic Artists</div>
            </div>
            <div id="pointer">V</div>
            <div className="text-div">
                <div className="info-div">
                    <div className="info-img"></div>
                    <div className="info-text">
                        <span>Search Your Favorite DJs</span>
                        <br/><br/>
                        Search for specific DJs by entering their Twitter handle into the search field, then scroll through to see their latest tweets.
                        Or, you can search by name or keyword to see what other people have to say about that artist or related topic;
                    </div>  
                </div>             
            </div>
            <div id="discover-div" className="text-div">
                <div className="info-div">
                    <div className="info-text">
                        <span>Disover Top EDM Artists</span>
                        <br/><br/>
                        Select the name of one of the my top five EDM artists to view their most recent tweets.
                        Scroll through their statuses over the past seven days to see what they're about and discover some of their latest music!
                    </div>
                    <div className="info-img"></div>
                </div>
            </div>
        </div>
    )
    
}

export default HomePage;