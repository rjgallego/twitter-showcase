import React, {useState} from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';

import './SearchPage.css';

import TwitterCard from '../../components/TwitterCard/TwitterCard';

const KEYWORD_URL = 'http://localhost:8080/search/content?q';
const USER_URL = 'http://localhost:8080/user?username';

const SearchPage = () => {
    const [tweetArray, setTweetArray] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const handleInput = (event) => {
        setSearchInput(event.target.value);
    }

    const handleEnter = (event) => {
        if(event.code !== "Enter") return;

        if(searchInput.indexOf('@') > -1) {
            getTweetsByUsername(searchInput.slice(1))
        }
        else getTweetsByKeyword(searchInput)

    }

    const getTweetsByUsername = (username) => {
        axios.get(`${USER_URL}=${username}`)
            .then(result => result.data)
            .then(resultData => setTweetArray(resultData));
    }

    const getTweetsByKeyword = (keyword) => {
        axios.get(`${KEYWORD_URL}=${keyword}`)
            .then(result => result.data)
            .then(resultData => setTweetArray(resultData));
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
                :   createTweetDivs()
            }
            {
                tweetArray.length === 1 ? <div className="pointer"></div> : <div id="scroll-pointer" className="pointer">V</div>
            }
        </div>
    )
    
}

export default SearchPage;