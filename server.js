require('dotenv').config()
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL
}))

const searchRouter = require('./routes/searchRouter');
const userRouter = require('./routes/userRouter');

const port = process.env.PORT || 8080;

app.use('/search', searchRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('DROPS app is running')
})

if(process.env.ENVIRONMENT === 'prod'){
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`))