require("dotenv").config()
const mongoose = require('mongoose')
const url = process.env.MONGODB_URI

mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const guestsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    adults: {
        type: Number,
        required: true
    },
    kids: {
        type: Number,
        required: true
    },
    isGoing: {
        type: Boolean,
        required: true
    }



})

const Guest = mongoose.model("guests", guestsSchema)

module.exports = Guest