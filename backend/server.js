require('dotenv').config()
const express = require('express');
const app = express();

const searchRouter = require('./routes/searchRouter');
const discoverRouter = require('./routes/discoverRouter');

const port = 8080;

app.use('/search', searchRouter);
app.use('/discover', discoverRouter);

app.listen(port, () => console.log(`Listening on port ${port}`))