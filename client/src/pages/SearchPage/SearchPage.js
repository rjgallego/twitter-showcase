import React, {useState} from 'react';
import Loader from 'react-loader-spinner';
import './SearchPage.css';
import {getTweetsByUsername, getTweetsByKeyword, createTweetDivs} from '../../helpers';

const SearchPage = () => {
    const [tweetArray, setTweetArray] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const handleInput = (event) => {
        setSearchInput(event.target.value);
    }

    const handleEnter = async (event) => {
        if(event.code !== "Enter") return;
        let returnedArray;

        if(searchInput.indexOf('@') > -1) {
            returnedArray = await getTweetsByUsername(searchInput.slice(1))
            setTweetArray(returnedArray)
        }
        else {
            returnedArray = await getTweetsByKeyword(searchInput)
            setTweetArray(returnedArray)
        }

    }

    return (
        <div id="search-main">
            <div id="input-div">
                <input id="search-input" 
                    type="text" 
                    placeholder="Search by @user or keyword, then Enter..." 
                    onInput={handleInput}
                    onKeyUp={handleEnter} />
            </div>
            {
                tweetArray.length === 0 ?
                    <div id="loader-div" className="page-content">
                        <Loader type="Bars" color="#FFFFFF" height={80} width={80} />
                    </div>
                :   createTweetDivs(tweetArray)
            }
            {
                tweetArray.length === 1 ? <div className="pointer"></div> : <div id="scroll-pointer" className="pointer">V</div>
            }
        </div>
    )
    
}

export default SearchPage;