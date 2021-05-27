import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import TwitterCard from '../../components/TwitterCard/TwitterCard';
import './DiscoverPage.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {changeElementClass} from '../../helpers';

const DiscoverPage = () => {
    const [tweetArray, setTweetArray] = useState([]);

    const DISCOVER_URL = "http://localhost:8080/user?username"

    useEffect(() => {
        getTweetArray('illenium')
    }, [])


    const getTweetArray = (username) => {
        axios.get(`${DISCOVER_URL}=${username}`)
            .then(result => result.data)
            .then(resultData => setTweetArray(resultData));
    }

    const handleClick = (event) => {
        changeElementClass(event.target.id, '.option-button', 'selected-option');
        getTweetArray(event.target.id);
    }

    const createTweetDivs = () => {
        return tweetArray.map((tweetData, i) => {
            if(i === 0) {
                return  <div key={i} className="page-content in-view scroll-div">
                            <TwitterCard TweetData={tweetData} />
                        </div>
            }
            if(i === (tweetArray.length - 1)) {
                return  <div key={i} className="page-content scroll-div end">
                            <TwitterCard TweetData={tweetData} />
                        </div>
            }

            return  <div key={i} className="page-content scroll-div">
                        <TwitterCard TweetData={tweetData} />
                    </div>
        })
    }

    return (
        <div id="discover-content">
            {
                tweetArray.length === 0 ?
                    <div id="loader-div" className="page-content">
                        <Loader type="Bars" color="#FFFFFF" height={80} width={80} />
                    </div>
                :   createTweetDivs()
            }
            {
                tweetArray.length === 1 ? <div className="pointer"></div> : <div id="scroll-pointer" className="pointer">V</div>
            }
            <div id="artist-options">
                <div id="illenium" className="option-button selected-option" onClick={handleClick}>Illenium</div>
                <div id="iamalanwalker" className="option-button" onClick={handleClick}>Alan Walker</div>
                <div id="kygomusic" className="option-button" onClick={handleClick}>Kygo</div>
                <div id="wearegalantis" className="option-button" onClick={handleClick}>Galantis</div>
                <div id="KSHMRmusic" className="option-button" onClick={handleClick}>KSHMR</div>
            </div>
        </div>
    )

}

export default DiscoverPage;