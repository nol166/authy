const validator = require('validator')
const isEmpty = function (value) {
    value === undefined ||
        value === null ||
        (typeof value === 'Object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
}

const vaidateRegisterInput = data => {
    console.log(data)
    const { name, email, password, password2 } = data
    const dataParts = [name, email, password, password2]
    let errors = {}

    // set everything to empty strings
    dataParts.forEach(thing => {
        if (isEmpty(thing)) {
            thing = ''
        } else {
            thing = thing
        }
    })

    // pw check
    if (!password2) {
        errors.password = 'Please provide password confirmation'
    }

    if (isEmpty(password) || isEmpty(password2)) {
        errors.password = 'Password field required'
    }
    // pw length
    if (!validator.isLength(password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters'
    }
    // pw match?
    if (!validator.equals(password, password2)) {
        errors.password2 = 'Passwords must match'
    }

    return {
        errors,
        isValid: isEmpty(errors),
    }
}

module.exports = { vaidateRegisterInput, isEmpty }
