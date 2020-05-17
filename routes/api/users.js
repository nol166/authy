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

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('login', (req, res) => {
    const { errors, isValid } = validateRegister(req.body)
    // check validation
    if (!isValid) {
        return res.status(400).json(errors)
    }

    const { email, password } = req.body

    // find user by email
    Users.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({ emailnotfound: 'Email not found' })
        }
    })

    // check pass
    bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
            // user match & create JWT payload
            const payload = {
                id: user.id,
                name: user.name,
            }

            // sign token
            jwt.sign(payload, keys, { expiresIn: 31556926 }, (err, token) => {
                res.json({
                    success: true,
                    token: 'Bearer ' + token,
                })
            })
        } else {
            return res
                .status(400)
                .json({ passwordincorrect: 'Password is incorrect' })
        }
    })
})

module.exports = router
