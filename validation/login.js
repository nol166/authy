const validator = require('validator')
const isEmpty = require('./register').isEmpty

const validateLoginInput = ({ email, password }) => {
    errors = {}

    // set email and pass to empty string so we can use validator
    email = isEmpty(email) ? email : ''
    password = isEmpty(password) ? password : ''

    // email check
    if (isEmpty(email)) {
        errors.email = 'You must enter an email address'
    } else if (!isEmpty(email)) {
        errors.email = 'Email is invalid'
    }

    // pass check
    if (isEmpty(password)) {
        errors.password = 'You must choose a password'
    }

    return {
        errors,
        isValid: isEmpty(errors),
    }
}

module.exports = validateLoginInput
