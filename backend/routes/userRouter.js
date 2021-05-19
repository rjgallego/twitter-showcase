const { default: axios } = require('axios');
const express = require('express');
const userRouter = express.Router();

const STATUS_URL = 'https://api.twitter.com/1.1/statuses/show.json?id';

const SEARCH_URL = 'https://api.twitter.com/2/tweets/search/recent?query=from'
const SEARCH_PARAMETERS = 'tweet.fields=created_at&expansions=author_id&user.fields=created_at';

const USER_URL = 'https://api.twitter.com/2/users/by/username';

const options = {
    headers: {
        'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
    }
}

userRouter.get('/username', (req, res) => {
    const username = req.query.username;
    axios.get(`${USER_URL}/${username}`, options)
        .then(result => result.data)
        .then(resultData => {
            if(resultData.errors){
                res.send({})
            }
            res.send(resultData.data);
        })
})

userRouter.get('/', (req, res) => {
    const username = req.query.username;

    axios.get(`${SEARCH_URL}:${username}&${SEARCH_PARAMETERS}`, options)
        .then(result => result.data)
        .then(resultData => {
            getTweetInfo(resultData.data).then(tweetData => res.send(tweetData));
        })
        .catch(error => {
            res.status(error.response.status).send({
                "error": error.response.statusText
            })
        })
})

const getTweetInfo = async (tweetArray) => {
    return await Promise.all(tweetArray.map( async (tweet) => {
        const tweetInfo = await axios.get(`${STATUS_URL}=${tweet.id}`, options);

        if(!tweetInfo) {
            return {
                "status": 500,
                "error": "Invalid URL or request"
            }
        }
        
        const mediaUrl = tweetInfo.data.entities.media ? tweetInfo.data.entities.media[0].media_url_https : "" 

        return {
            'id': tweet.id,
            'text': tweetInfo.data.text,
            'media_url': mediaUrl,
            'created_at': tweetInfo.data.created_at,
            'user': {
                'name': tweetInfo.data.user.name,
                'screen_name': tweetInfo.data.user.screen_name,
                'profile_img_url': tweetInfo.data.user.profile_image_url_https
            }
        } 
    }))
}

module.exports = userRouter;