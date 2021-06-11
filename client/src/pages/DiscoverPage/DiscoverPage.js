import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import './DiscoverPage.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {createTweetDivs, getTweetData} from '../../helpers';

const USER_URL = '/user?username';

const DiscoverPage = () => {
    const [tweetArray, setTweetArray] = useState([]);
    const [selectedOption, setSelectedOption] = useState('illenium');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        updateTweetArray(USER_URL, selectedOption)
    }, [selectedOption])

    const updateTweetArray = (URL, searchTerm) => {
        setIsLoading(true);
        getTweetData(URL, searchTerm)
            .then(result => {
                setIsLoading(false);
                setTweetArray(result);
            })
    }

    const handleClick = (event) => {
        setSelectedOption(event.target.id)
    }

    return (
        <div id="discover-content">
            {
                isLoading ?
                    <div id="loader-div" className="page-content">
                        <Loader type="Bars" color="#FFFFFF" height={80} width={80} />
                    </div>
                :   createTweetDivs(tweetArray)
            }
            {
                tweetArray.length <= 1 ? 
                    <div className="pointer"></div> 
                  : <div id="scroll-pointer" className="pointer">V</div>
            }
            <div id="artist-options">
                <div id="illenium" 
                     className={`option-button ${selectedOption === 'illenium' ? 'selected-option' : ''}`}
                     onClick={handleClick}>Illenium</div>
                <div id="iamalanwalker" 
                     className={`option-button ${selectedOption === 'iamalanwalker' ? 'selected-option' : ''}`}
                     onClick={handleClick}>Alan Walker</div>
                <div id="kygomusic" 
                     className={`option-button ${selectedOption === 'kygomusic' ? 'selected-option' : ''}`}
                     onClick={handleClick}>Kygo</div>
                <div id="wearegalantis" 
                     className={`option-button ${selectedOption === 'wearegalantis' ? 'selected-option' : ''}`}
                     onClick={handleClick}>Galantis</div>
                <div id="KSHMRmusic" 
                     className={`option-button ${selectedOption === 'KSHMRmusic' ? 'selected-option' : ''}`}
                     onClick={handleClick}>KSHMR</div>
            </div>
        </div>
    )

}

export default DiscoverPage;