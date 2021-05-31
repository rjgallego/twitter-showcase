import React from 'react';
import moment from 'moment';

import './TwitterCard.css';

const TwitterCard = ({ TweetData }) => {
    return (
        <div id="card-div">
            <div id="artist-info">
                <img id="artist-profile-img" src={TweetData.user.profile_img_url} alt="Twitter user's profile img"/>
                <div>
                    <div id="artist-name">{TweetData.user.name}</div>
                    <div id="artist-screen-name">@{TweetData.user.screen_name}</div>
                </div>
            </div>
            <div id="tweet-text">{TweetData.text}</div>
            <div id="tweet-media-div">
                {
                    TweetData.media_url.length === 0 ? "" 
                        : <img id="tweet-media-content" 
                                src={TweetData.media_url} 
                                alt="Tweet media image"/>
                }
            </div>
            <div id="tweet-timestamp">{moment(new Date(TweetData.created_at)).calendar()}</div>
        </div> 
    )
}

export default TwitterCard;