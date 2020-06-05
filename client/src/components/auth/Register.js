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
        e.preventDefault()
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="">
                <input type="email" name="email" />
                <input type="username" name="username" placeholder="" />
                <input
                    type="password"
                    name="password"
                    placeholder="person@jmdev.io"
                />
                <input
                    type="passwword"
                    name="password2"
                    placeholder="person@jmdev.io"
                />
                <input type="email" placeholder="person@jmdev.io" />
                <input type="submit" />
            </form>
        </div>
    )
}
