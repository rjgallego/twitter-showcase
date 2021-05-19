require('dotenv').config()
const express = require('express');
const app = express();

const searchRouter = require('./routes/searchRouter');
const userRouter = require('./routes/userRouter');

const port = 8080;

app.use('/search', searchRouter);
app.use('/user', userRouter);

app.listen(port, () => console.log(`Listening on port ${port}`))