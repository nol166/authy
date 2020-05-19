const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = process.env.SECRET_OR_KEY

// import validation
const validateRegister = require('../../validation/register')
const validateLogin = require('../../validation/login')

// user model
const User = require('../../models/User')
// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegister(req.body)
    console.log(req.body)
    console.log(isValid)
    if (!isValid) {
        return res.status(400).json(errors)
    }
    User.findOne({ email: req.body.email }, (err, user) => {
        if (user) {
            console.log('already exists')
            return res.status(400).json({ email: 'Email already exists' })
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err
                    newUser.password = hash
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err))
                })
            })
        }
    })
})

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', (req, res) => {
    const { errors, isValid } = validateLogin(req.body)
    // check validation
    if (!isValid) {
        return res.status(400).json(errors)
    }

    const { email, password } = req.body

    // find user by email
    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({ emailnotfound: 'Email not found' })
        }

        if (user) {
            res.status(200).json(user)
        }
        // check pass
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                console.log('its a match')
                // user match & create JWT payload
                const payload = {
                    id: user.id,
                    name: user.name,
                }

                // sign token
                jwt.sign(
                    payload,
                    keys,
                    { expiresIn: 31556926 },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: 'Bearer ' + token,
                        })
                    }
                )
            } else {
                console.log('not a match')

                return res
                    .status(400)
                    .json({ passwordincorrect: 'Password is incorrect' })
            }
        })
    })
})

// @route POST api/users/list
// @desc Return list of all users
// @access Private
router.get('/list', (req, res) => {
    console.log(req.hostname)
    if (req.hostname === 'localhost') {
        User.find({}).then(users => res.json(users))
    } else {
        res.status(550)
        res.json('Permission denied')
    }
})

// @route POST api/users/list
// @desc Return a single user
// @access Private
router.get('/find', (req, res) => {
    console.log(req.hostname)
    if (req.hostname === 'localhost') {
        let user = req.body.email
        User.findOne({ email: user }).then(users => res.json(users))
    } else {
        res.status(550)
        res.json('Permission denied')
    }
})

module.exports = router

// curl --resolve 127.0.0.1:5000/api/users/list http://www.example.com/
