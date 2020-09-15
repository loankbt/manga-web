const mongoose = require('mongoose')

const Schema = mongoose.Schema

const imageSchema = new Schema({
    epId: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true,
    })

const Image = mongoose.model('Image', imageSchema)

module.exports = Image