const { default: axios } = require('axios');
const express = require('express');
const discoverRouter = express.Router();

const STATUS_URL = 'https://api.twitter.com/1.1/statuses/show.json?id'
const SEARCH_URL = 'https://api.twitter.com/2/tweets/search/recent?query=from'
const SEARCH_PARAMETERS = 'tweet.fields=created_at&expansions=author_id&user.fields=created_at';

const options = {
    headers: {
        'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
    }
}

discoverRouter.get('/:username', (req, res) => {
    const username = req.params.username;
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

module.exports = discoverRouter;