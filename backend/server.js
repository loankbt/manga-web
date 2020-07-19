const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successully!");
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../frontend/build'))
}

const mangaRouter = require('./routes/manga')
const episodeRouter = require('./routes/episode')

app.use('/manga', mangaRouter);
app.use('/episode', episodeRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})