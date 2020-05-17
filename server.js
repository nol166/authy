require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const mongoURI = process.env.MONGO_URI
const localURI = process.env.MONGO_DEV
const isDev = process.env.NODE_ENV !== 'production'
const app = express()

// bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const users = require('./routes/api/users')

const connectMe = uri => {
    mongoose
        .connect(uri, { useNewUrlParser: true })
        .then(res =>
            console.log(
                `MongoDB connected as ${
                    res.connections[0].user || 'local'
                } on ${res.connections[0].host}`,
                uri
            )
        )
        .catch(err => console.log(err))
}

app.use(passport.initialize()) // passport middleware
require('./config/passport')(passport) // passport config
app.use('/api/users', users)

if (!isDev) {
    connectMe(mongoURI)
} else {
    connectMe(localURI)
}

const port = process.env.PORT || 5000 // the former is for heroku

app.listen(port, () => console.log(`server running on port ${port}`))
