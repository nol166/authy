const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
})

module.exports = User = mongoose.model('users', userSchema)
