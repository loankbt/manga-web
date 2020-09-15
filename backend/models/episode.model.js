const mongoose = require('mongoose')

const Schema = mongoose.Schema

const episodeSchema = new Schema({
    belongsTo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    cover: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
    })

const Episode = mongoose.model('Episode', episodeSchema)

module.exports = Episode