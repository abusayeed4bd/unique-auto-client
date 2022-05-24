import React, { useState } from 'react';
import logo from '../../image/logo.png'
import { Link } from 'react-router-dom';
import banner from '../../image/bannerBg.png'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Login = () => {
    const [fEmail, setEmail] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending, forgotError] = useSendPasswordResetEmail(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        event.target.reset();
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
        <div style={{ backgroundImage: `url(${banner})` }} class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-base-200 ">
            <div class="max-w-md lg:w-1/2 p-8 space-y-8 shadow-lg bg-base-100 rounded-xl">
                <div>
                    <img class="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    <p class="mt-2 text-center text-sm text-gray-600">
                        Or
                        <Link to='/signup' class="font-medium text-primary hover:text-secondary"> Create an account </Link>
                    </p>
                </div>
                <form onSubmit={handleLogin} class="mt-8" >

                    <div class="rounded-md shadow-sm space-y-3">

                        <div className="w-full mx-auto">
                            <input type="email" onBlur={handleEmailBlur} name="email" placeholder="Email" class="input input-bordered w-full" required />
                        </div>
                        <div className="w-full mx-auto">
                            <input type="password" name="password" placeholder="Password" class="input input-bordered w-full" required />
                        </div>
                        {loading ? <input type="submit" className="btn btn-primary w-full" value="Loading..." disabled /> : <input type="submit" className="btn btn-primary w-full" value="Create Account" />

                        }
                    </div>
                    {
                        error && <p className="text-error text-center">{error.message}</p>
                    }




                </form>
                <p className="!m-0  ">forgot password? <button onClick={handleResetPassword} className="btn btn-link !mt-0 p-0">reset</button></p>
                <div class="divider">OR</div>
                {googleLoading ? <button className="btn btn-primary btn-outline w-full btn-sm">Loading ...</button> :
                    <button onClick={handleGoogleLogin} className="btn btn-primary btn-outline w-full btn-sm">SignIn with Google</button>}


            </div>
        </div>
    );
};

export default Login;