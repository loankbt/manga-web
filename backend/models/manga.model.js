const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mangaSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    author: {
        type: String,
        required: true,
        minlength: 1
    },
    type: {
        type: String,
        required: true,
        minlength: 1
    },
    about: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
});

const Manga = mongoose.model('Manga', mangaSchema);

module.exports = Manga;