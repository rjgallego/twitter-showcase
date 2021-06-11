# DROPS - A React + Express App 
DROPS is a web application build with a React front-end and Express back-end. The back-end uses the Twitter API to pull tweet information by keyword or username and send that information back to the front-end for display.

Try out the live version here: [DROPS Site](https://twitter-drops.herokuapp.com/)

## About DROPS
The theme of DROPS is based on my favorite genre of music: Electronic Dance Music (EDM). The Twitter API is used to showcase Tweets by some of my favorite DJs, or the user can search for any other artists or topics they'd like to learn more about.

There are three pages to this site: Home, Search, and Discover.

### Home Page
The Home page provides an overview of the site and what the user can find on each of the other pages, and some basic instructions on how to use the different features provided.

![](./screenshots/Home.gif)

### Search Page
The Search page allows the user to search by username or keyword. Usernames must be entered by @[username] and must match the account's Twitter handle. Without the '@' symbol, the API will search for tweets containing that keyword and return the user to scroll through one at a time.

![](./screenshots/Search.gif)

### Discover Page
The Discover page contains five separate buttons, each pointing to an EDM artist that I have selected. Pressing one of these buttons will pull the latest tweets by that DJ's Twitter account and display one a time for the user to scroll through.

![](./screenshots/Discover.gif)

## Tools + Technologies
### Front-End
The front-end of this project is built in React using create-react-app application. The entire site contains of a single page layout that changes content based on the current endpoint. CSS styling and transitions are used to improve the user experience and also to make the site mobile responsive. External resources and packages imported for this project are listed below.

Additional Resources:
- Fonts: https://fonts.google.com/
- Background image: https://unsplash.com/
- Loading spinner: https://github.com/mhnpd/react-loader-spinner
- Mobile menu icon: https://react-icons.github.io/react-icons/

### Back-End
The back-end for this site is created using Express.js. There are two routes defined for the backend: user and search. The former is used to return tweets by username, the second to return tweets by keyword. For each route endpoint, Twitter's API is used to pull the requested data (tweet text, profile image, media links, etc.), which is then reformated and sent to the front-end for display. More information on Twitter's API can be found on their site.

Additional Resources: 
- Twitter API: https://developer.twitter.com/en/docs/twitter-api

## Running Locally
The below instructions can be followed if you want to run this project locally for custom development or enhancements:

Setup locally
- Fork this repository to your Github account
- On your local computer, navigate to the folder you want to store the project: `cd PROJECT-FOLDER-NAME`
- Clone the forked repository locally: `git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`

Start back-end
- Navigate to project folder: `cd PROJECT-FOLDER-NAME/twitter-showcase`
- Install dependencies: `npm install`
- Start server in development node: `npm run dev`
- Add .env file to twitter-showcase folder
- Add variable CLIENT_URL and set to http://localhost:3000/
- Add variable BEARER_TOKEN and set your bearer token for your Twitter account
    - if you don't have a bearer token, you can create an account at [developer.twitter.com](developer.twitter.com) and use your account to generate bearer tokens. Instructions can be found [HERE](https://developer.twitter.com/ja/docs/basics/authentication/guides/access-tokens)
    - NOTE: if you already have a Twitter account and don't have your bearer token saved, you can generate a new one, but you will need to update any existing application with the new token value

Start front-end
- Open a new terminal window
- Navigate to the client folder: `cd PROJECT-FOLDER-NAME/twitter-showcase/client`
- Install dependencies: `npm install`
- Start the React application: `npm start`
- View the application in your browser at http://localhost:3000

## Author
Rheanna Pena - [LinkedIn](https://www.linkedin.com/in/rheanna-gallego-aa0007110/)
