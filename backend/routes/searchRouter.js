const express = require('express');
const axios = require('axios');
const searchRouter = express.Router();

const SEARCH_URL = 'https://api.twitter.com/1.1/search/tweets.json';
const STATUS_URL = 'https://api.twitter.com/1.1/statuses/show.json?id';


const options = {
    headers: {
        'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
    }
}

searchRouter.get('/usernames', (req, res) => {
    const query = req.query.q;

    axios.get(`${SEARCH_URL}?q=${query}&result_type=mixed`, options)
         .then(result => {
            const usernames = result.data.statuses.map(status => {
                return status.user.screen_name;
            })
            res.send(usernames)
         })
})

searchRouter.get('/tweets', (req, res) => {
    const query = req.query.q;

    axios.get(`${SEARCH_URL}?q=${query}&result_type=mixed`, options)
    .then(result => result.data)
    .then(resultData => {
        getTweetData(resultData.statuses).then(tweetData => res.send(tweetData));
    })        
    .catch(error => {
        res.status(error.response.status).send({
            "error": error.response.statusText
        })
    })
});

const getTweetData = async (tweetArray) => {
    return await Promise.all(tweetArray.map( async (tweet) => {
        const tweetInfo = await axios.get(`${STATUS_URL}=${tweet.id_str}`, options)

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


module.exports = searchRouter;