import React from 'react';

import './HomePage.css';

const HomePage = () => {
    return (
        <div id="home-content">
            <div id="title" className="text-div scroll-div in-view">
                <div id="sub-title">Using Twitter to Discover</div>
                <div id="main-title">Electronic Artists</div>
            </div>
            <div className="pointer">V</div>
            <div className="text-div scroll-div">
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
            <div id="discover-div" className="text-div scroll-div end">
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