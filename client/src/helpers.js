import axios from 'axios';
import TwitterCard from './components/TwitterCard/TwitterCard';

const getTweetData = async (URL, searchTerm) => {
    const tweetArray = await axios.get(`${URL}=${searchTerm}`);
    return tweetArray.data
}

const createTweetDivs = (tweetArray) => {
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

export { createTweetDivs,
        getTweetData}