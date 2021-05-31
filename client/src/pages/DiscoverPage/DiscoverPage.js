import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import './DiscoverPage.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {changeElementClass, createTweetDivs, getTweetData} from '../../helpers';

const USER_URL = process.env.NODE_ENV === 'development' ? 
                    'http://localhost:8080/user?username' : 'https://twitter-drops.herokuapp.com/';


const DiscoverPage = () => {
    const [tweetArray, setTweetArray] = useState([]);
    const [selectedOption, setSelectedOption] = useState('illenium');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        updateTweetArray(USER_URL, selectedOption)
        addClickHandlers();
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
        changeElementClass(event.target.id, '.option-button', 'selected-option');
        setSelectedOption(event.target.id)
    }

    const addClickHandlers = () => {
        document.querySelectorAll('.option-button')
            .forEach(option => option.addEventListener('click', handleClick))
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
                <div id="illenium" className="option-button selected-option">Illenium</div>
                <div id="iamalanwalker" className="option-button">Alan Walker</div>
                <div id="kygomusic" className="option-button">Kygo</div>
                <div id="wearegalantis" className="option-button">Galantis</div>
                <div id="KSHMRmusic" className="option-button">KSHMR</div>
            </div>
        </div>
    )

}

export default DiscoverPage;