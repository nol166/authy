require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const mongoURI = process.env.MONGO_URI

console.log(process.env.MONGO_URI)

const app = express()

// bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then((res) =>
        console.log(
            `MongoDB connected as ${res.connections[0].user} on ${res.connections[0].host}`
        )
    )
    .catch((err) => console.log(err))

const port = process.env.PORT || 5000 // the former is for heroku

app.listen(port, () => console.log(`server running on port ${port}`))
