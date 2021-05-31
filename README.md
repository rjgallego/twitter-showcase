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
The Search page allows the user to search by username or keyword. Usernames must be search by @[username] and the username must match the accounts Twitter handle. Without the '@' symbol, the API will search for tweets containing that keyword and return up to fifteen tweets for the user to scroll through one at a time.

![](./screenshots/Search.gif)

### Discover Page
The Discover page contains five separate buttons, each pointing to a specific EDM artist that I have selected. Pressing one of these buttons will pull the latest tweets by that specific DJ's Twitter account and display one a time for the user to scroll through.

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
Start front-end
- Navigate to the client folder: `cd PROJECT-FOLDER-NAME/twitter-showcase/client`
- Install dependencies: `npm install`
- Start the React application: `npm start`
- View the application in your browser at http://localhost:3000

## Author
Rheanna Pena - [LinkedIn](https://www.linkedin.com/in/rheanna-gallego-aa0007110/)
