import React, { useState } from 'react';
import logo from '../../image/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import banner from '../../image/bannerBg.png'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [fEmail, setEmail] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending, forgotError] = useSendPasswordResetEmail(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const [token] = useToken(user || googleUser);



    // require auth 
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }


    // login
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }
    const handleResetPassword = () => {
        if (!fEmail) {
            toast.error('Please enter a email');
        } else {

            sendPasswordResetEmail(fEmail);
            toast.success(`Reset Email sent to ${fEmail}`)
        }
    }


    const handleGoogleLogin = () => {
        signInWithGoogle()
    }
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-base-200 ">
            <div className="max-w-md lg:w-1/2 p-8 space-y-8 shadow-lg bg-base-100 rounded-xl">
                <div>
                    <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or
                        <Link to='/signup' className="font-medium text-primary hover:text-secondary"> Create an account </Link>
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] mx-auto">

                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            onBlur={handleEmailBlur}
                            className="input input-bordered w-full max-auto"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full max-auto"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>


                    <input className='btn btn-primary w-full mx-auto text-white' type="submit" value="Login" />
                </form>
                {
                    error && <p className="text-error text-center">{error.message}</p>
                }
                <p className="!m-0  ">forgot password? <button onClick={handleResetPassword} className="btn btn-link !mt-0 p-0">reset</button></p>
                <div className="divider">OR</div>
                {googleLoading ? <button className="btn btn-primary btn-outline w-full btn-sm">Loading ...</button> :
                    <button onClick={handleGoogleLogin} className="btn btn-primary btn-outline w-full btn-sm">SignIn with Google</button>}


            </div>
        </div>
    );
};

export default Login;