require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const mongoURI = process.env.MONGO_URI
const localURI = process.env.MONGO_DEV
const isDev = process.env.NODE_ENV !== 'production'
const app = express()

// let api = require('./routes/api/users')
// app.use(api)

// bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const connectMe = uri => {
    mongoose
        .connect(uri, { useNewUrlParser: true })
        .then(res =>
            console.log(
                `MongoDB connected as ${
                    res.connections[0].user || 'local'
                } on ${res.connections[0].host}`
            )
        )
        .catch(err => console.log(err))
}

if (!isDev) {
    connectMe(mongoURI)
} else {
    connectMe(localURI)
}

const port = process.env.PORT || 5000 // the former is for heroku

app.listen(port, () => console.log(`server running on port ${port}`))
