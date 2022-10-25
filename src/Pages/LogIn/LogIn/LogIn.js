import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CgGoogle } from "react-icons/cg";
import { IoLogoGithub } from "react-icons/io5";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const LogIn = () => {
    const { logInUser, googleSignInUser, githubSignInUser, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/')
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false)
            })

    };

    const handleGoogleSignIn = () => {
        googleSignInUser()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false)
            })
    };

    const handleGithubSignIn = () => {
        githubSignInUser()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left mb-6">
                    <h1 className="text-5xl font-bold">Please Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered input-primary w-full max-w-xs" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered input-primary w-full max-w-xs" required />
                            <label className="label font-semibold">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary" type='submit'>Login</button>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                                <div className=" btn  bg-base-300  place-items-center mb-4" onClick={handleGoogleSignIn}><CgGoogle className='mr-2 text-xl' />Google</div>
                                <div className=" btn  bg-base-300  place-items-center" onClick={handleGithubSignIn}><IoLogoGithub className='mr-2 text-xl' /> Github</div>
                            </div>
                            <small className='mt-3 font-semibold'>Don't have an account? <Link to='/register'><span className='text-primary'>Register.</span></Link></small>
                        </div>

                    </form>
                </div>
            </div >
        </div >
    );
};

export default LogIn;