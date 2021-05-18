const express = require('express');
const axios = require('axios');
const searchRouter = express.Router();

const SEARCH_URL = 'https://api.twitter.com/1.1/search/tweets.json';
const USER_URL = 'https://api.twitter.com/2/users/by';
const USER_QUERY = 'tweet.fields=author_id,created_at';
const TWEET_URL = 'https://api.twitter.com/2/tweets';
const TWEET_QUERY = 'tweet.fields=attachments,author_id,created_at,entities,id,text,withheld';

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

searchRouter.get('/:index/content', (req, res) => {
    const index = req.params.index;
    const query = req.query.q;

    getQueryData(index, query).then(data => {
        axios.get(`${TWEET_URL}/${data.tweetId}?${TWEET_QUERY}`, options)
        .then(result => result.data.data)
        .then(resultData => {
            const response = {
                "id" : data.tweetId,
                "text" : resultData.text,
                "name" : data.name,
                "screen_name" : data.screenName,
                "profile_image_url": data.profileUrl,
                "media_urls": resultData.entities.urls[0].images,
                "created_at" : resultData.created_at,
            }
            res.send(response)
        })
    })
});

searchRouter.get('/user/:username', (req, res) => {
    const username = req.params.username;
    axios.get(`${USER_URL}?usernames=${username}&${USER_QUERY}`, options)
    .then(result => {
        res.send(result.data.data[0]);
    })
})

const getQueryData = async (index, query) => {
    const queryData = await axios.get(`${SEARCH_URL}?q=${query}&result_type=mixed`, options)
        .catch(e => res.status(e.response.status).send({ "Error" : e.response.statusText}))

    const tweet = queryData.data.statuses[index]

    return {
        "tweetId": tweet.id_str,
        "name": tweet.user.name,
        "screenName": tweet.user.screen_name,
        "profileUrl": tweet.user.profile_image_url_https
    }
}


module.exports = searchRouter;