import React from 'react';
import { Link } from 'react-router-dom';
import { CgGoogle } from "react-icons/cg";
import { IoLogoGithub } from "react-icons/io5";

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left mb-6">
                    <h1 className="text-5xl font-bold">Please Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Full Name</span>
                            </label>
                            <input type="text" placeholder="Enter your full name" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Enter your photoURl" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" className="input input-bordered input-primary w-full max-w-xs" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="text" placeholder="Enter your password" className="input input-bordered input-primary w-full max-w-xs" required />
                            <label className="label font-semibold">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary" type='submit'>Login</button>
                            <small className='mt-3 font-semibold'>Already have an account? <Link to='/login'><span className='text-primary'>Login.</span></Link></small>
                        </div>

                    </form>
                </div>
            </div >
        </div >
    );
};

export default Register;