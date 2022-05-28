import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import logo from '../../image/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import banner from '../../image/bannerBg.png'
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user || googleUser);

    const navigate = useNavigate()
    if (token) {
        navigate('/')
    }

    const handelCreateUser = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        console.log(email, password)
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })
        toast.success('Account created successfully. verification email sent');


        // field reset
        event.target.reset();
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
    }
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-base-200 ">
            <div className="max-w-md w-full space-y-8 lg:w-1/2 bg-base-100 p-8 rounded-lg">
                <div>
                    <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an Account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or
                        <Link to="/login" className="font-medium text-primary hover:text-indigo-500"> Login</Link>
                    </p>
                </div>
                <form onSubmit={handelCreateUser} className="mt-8" >

                    <div className="rounded-md shadow-sm space-y-3">
                        <div className="w-full mx-auto">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
                        </div>
                        <div className="w-full mx-auto">
                            <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
                        </div>
                        <div className="w-full mx-auto">
                            <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" required />
                        </div>
                        {loading ? <input type="submit" className="btn btn-primary w-full" value="Creating Account..." disabled /> : <input type="submit" className="btn btn-primary w-full" value="Create Account" />

                        }
                    </div>
                    {
                        error && <p className="text-error text-center">{error.message}</p>
                    }





                </form>
                <div className="divider">OR</div>
                {googleLoading ? <button className="btn btn-primary btn-outline w-full btn-sm">Loading ...</button> :
                    <button onClick={handleGoogleLogin} className="btn btn-primary btn-outline w-full btn-sm">SignIn with Google</button>}
            </div>
        </div>
    );
};

export default SignUp;