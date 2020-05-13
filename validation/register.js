const validator = require('validator')
const isEmpty = require('is-empty')

const vaidateRegisterInput = data => {
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
    if (validator.isEmpty(password) || validator.isEmpty(password2)) {
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

    // data.name = !isEmpty(data.name) ? data.name : ''
    // data.email = !isEmpty(data.email) ? data.email : ''
    // data.password = !isEmpty(data.password) ? data.password : ''
    // data.password2 = !isEmpty(data.password2) ? data.password2 : ''

    // if (validator.isEmpty(data.name)) {
    //     errors.name = "Name field is required"
    // }
}

module.exports = vaidateRegisterInput
