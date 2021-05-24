import React from 'react';
import './TwitterCard.css';

const TwitterCard = ({ TweetData }) => {

    const convertTimestamp = () => {
        const timestamp = new Date(TweetData.created_at)
        const timestampArray = timestamp.toString().split(' ');
        const timeArray = timestampArray[4].split(':');
        const time = parseInt(timeArray[0]) < 12 ? `${timeArray[0]}:${timeArray[1]} AM` : `${timeArray[0]}:${timeArray[1]} PM`
        return `${time} - ${timestampArray[1]} ${timestampArray[2]}, ${timestampArray[3]}`
    }

    return (
        <div id="card-main">
            <div id="artist-info">
                <img id="artist-profile-img" src={TweetData.user.profile_img_url}/>
                <div>
                    <div id="artist-name">{TweetData.user.name}</div>
                    <div id="artist-screen-name">@{TweetData.user.screen_name}</div>
                </div>
            </div>
            <div id="tweet-text">{TweetData.text}</div>
            <div id="tweet-media-div">
                <img id="tweet-media-content" src={TweetData.media_url} />
            </div>
            <div id="tweet-timestamp">{convertTimestamp()}</div>
        </div>
    )
}

export default TwitterCard;