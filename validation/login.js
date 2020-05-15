const validator = require('validator')
const isEmpty = require('is-empty')

const validateLoginInput = ({ email, password }) => {
    errors = {}

    // set email and pass to empty string so we can use validator
    data.email = isEmpty(email) ? email : ''
    data.password = isEmpty(password) ? password : ''

    // email check
    if (validator.isEmpty(email)) {
        errors.email = 'You must enter an email address'
    } else if (!validator.isEmpty(email)) {
        errors.email = 'Email is invalid'
    }

    // pass check
    if (validator.isEmpty(password)) {
        errors.password = 'You must choose a password'
    }

    return {
        errors,
        isValid: isEmpty(errors),
    }
}

module.exports = validateLoginInput
