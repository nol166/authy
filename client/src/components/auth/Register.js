import React, { useState } from 'react'
import { isEmail, isEmpty } from 'validator'
import { useForm, ErrorMessage } from 'react-hook-form'
import './style/register.css'

export default function Register() {
    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    let errors = {}

    const validateForm = ({ email, password, username, password2 }) => {
        if (!isEmail(email)) {
            errors.email = 'Not a valid email'
        }
        if (isEmpty(password) || isEmpty(password2)) {
            errors.password = 'Please fill out both password fields'
        }
        if (isEmpty(username)) {
            errors.username = 'Please provide a username'
        }
    }

    const handleSubmit = (e) => {
        alert('submitted')
        e.preventDefault()
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="">
                <input type="email" name="email" placeholder="john@jmdev.io" />
                <input type="text" name="username" placeholder="jmdev" />
                <input type="password" name="password" placeholder="******" />
                <input type="password" name="password2" placeholder="******" />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
