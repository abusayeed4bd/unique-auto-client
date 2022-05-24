import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import logo from '../../image/logo.png'
import { Link } from 'react-router-dom';
import banner from '../../image/bannerBg.png'
import auth from '../../firebase.init';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handelCreateUser = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        createUserWithEmailAndPassword(email, password)
        event.reset();
    }
    return (
        <div style={{ backgroundImage: `url(${banner})` }} class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-base-200 ">
            <div class="max-w-md w-full space-y-8 lg:w-1/2 bg-base-100 p-8 rounded-lg">
                <div>
                    <img class="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an Account</h2>
                    <p class="mt-2 text-center text-sm text-gray-600">
                        Or
                        <Link to="/login" class="font-medium text-primary hover:text-indigo-500"> Login</Link>
                    </p>
                </div>
                <form onSubmit={handelCreateUser} class="mt-8" >

                    <div class="rounded-md shadow-sm space-y-3">
                        <div className="w-full mx-auto">
                            <input type="text" name="name" placeholder="Name" class="input input-bordered w-full" required />
                        </div>
                        <div className="w-full mx-auto">
                            <input type="email" name="email" placeholder="Email" class="input input-bordered w-full" required />
                        </div>
                        <div className="w-full mx-auto">
                            <input type="password" name="password" placeholder="Password" class="input input-bordered w-full" required />
                        </div>
                        {loading ? <input type="submit" className="btn btn-primary w-full" value="Creating Account..." /> : <input type="submit" className="btn btn-primary w-full" value="Create Account" />

                        }
                    </div>
                    {
                        error && <p className="text-error text-center">{error.message}</p>
                    }




                </form>
                <div class="divider">OR</div>
                <button className="btn btn-primary btn-outline w-full btn-sm">SignIn with Google</button>
            </div>
        </div>
    );
};

export default SignUp;