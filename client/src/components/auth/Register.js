import React from 'react'
import { useForm } from 'react-hook-form'
import './style/register.css'

function Register() {
    const { register, handleSubmit, errors } = useForm() // initialize the hook
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="formS">
                <input
                    name="email"
                    ref={register({ required: true })}
                    placeholder="john@jmdev.io"
                />
                {errors.email && 'Email required.'}
                {/* register an input */}
                <input
                    name="name"
                    ref={register({ required: true })}
                    placeholder="Appleseed"
                />
                {errors.name && 'User name is required.'}
                <input
                    name="password"
                    ref={register({ required: true })}
                    placeholder="*******"
                />
                {errors.age && 'Please enter number for age.'}
                <input name="password2" ref={register} placeholder="*******" />
                {errors.age && 'Please enter number for age.'}
                <input type="submit" content="hello" />
            </form>
        </div>

        //     <div id="register-page" className="row" style={{ width: '30%' }}>
        //         <div className="col s12 z-depth-6 card-panel">
        //             <form
        //                 className="register-form"
        //                 style={{ width: '90%', paddingTop: '10px' }}
        //                 onSubmit={handleSubmit(onSubmit)}
        //             >
        //                 <div className="row margin">
        //                     <div className="input-field col s12">
        //                         <i className="mdi-social-person-outline prefix"></i>
        //                         <input
        //                             name="user_name"
        //                             type="text"
        //                             className="validate"
        //                         />
        //                         <label htmlFor="user_name" className="center-align">
        //                             Username
        //                         </label>
        //                     </div>
        //                 </div>
        //                 <div className="row margin">
        //                     <div className="input-field col s12">
        //                         <i className="mdi-communication-email prefix"></i>
        //                         <input
        //                             id="user_email"
        //                             type="email"
        //                             className="validate"
        //                             ref={register}
        //                         />
        //                         <label
        //                             htmlFor="user_email"
        //                             className="center-align"
        //                         >
        //                             Email
        //                         </label>
        //                     </div>
        //                 </div>
        //                 <div className="row margin">
        //                     <div className="input-field col s12">
        //                         <i className="mdi-action-lock-outline prefix"></i>
        //                         <input
        //                             id="user_passw"
        //                             type="password"
        //                             className="validate"
        //                             ref={register}
        //                         />
        //                         <label htmlFor="user_passw">Password</label>
        //                     </div>
        //                 </div>
        //                 <div className="row margin">
        //                     <div className="input-field col s12">
        //                         <i className="mdi-action-lock-outline prefix"></i>
        //                         <input
        //                             id="confirm_pass"
        //                             type="password"
        //                             ref={register}
        //                         />
        //                         <label htmlFor="confirm_pass">
        //                             Re-type password
        //                         </label>
        //                     </div>
        //                 </div>
        //                 <div className="row">
        //                     <div
        //                         className="input-field col s12"
        //                         style={{ margin: '10px' }}
        //                     >
        //                         <a
        //                             href="register.html"
        //                             className="btn waves-effect waves-light col s12"
        //                         >
        //                             Register Now
        //                         </a>
        //                     </div>
        //                     <div className="input-field col s12">
        //                         <p className="margin center medium-small sign-up">
        //                             Already have an account?{' '}
        //                             <Link to="/login">Login</Link>
        //                         </p>
        //                     </div>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // )
    )
}

export default Register
