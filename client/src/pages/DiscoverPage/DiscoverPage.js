import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import TwitterCard from '../../components/TwitterCard/TwitterCard';
import './DiscoverPage.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {changeElementClass} from '../../helpers';

const DiscoverPage = () => {
    const [tweetArray, setTweetArray] = useState([]);
    const [tweetIndex, setTweetIndex] = useState(0);
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

    return (
        <div id="discover-content">
            <div id="page-content">
                {
                    tweetArray.length === 0 ?
                        <Loader type="Bars" color="#FFFFFF" height={80} width={80} />
                    :   <TwitterCard TweetData={tweetArray[tweetIndex]} />
                }
            </div>
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