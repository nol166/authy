const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const keys

// import validation
const validateRegister = require('../../validation/register')
const validateLogin = require('../../validation/login')

// user model
const User = require('../../models/User')

const hashPass = user => {}

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegister(req.body)
    if (!isValid) {
        return res.status(400).json(errors)
    }
    User.findOne({ email: req.body.email }, (err, user) => {
        if (user) {
            return res.status(400).json({ email: 'Email already exists' })
        } else {
            const newUser = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            }
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err
                    newUser.password = hash
                    newUser
                        .save()
                        .then(newUser => res.json(newUser))
                        .catch(err => console.log(err))
                })
                console.log(newUser)
            })
        }
    })
})

module.exports = router
