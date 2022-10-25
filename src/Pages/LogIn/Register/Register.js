import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const { emailPasswordSignUpUser, updateUserProfile, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()
    const [accepted, setAccepted] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;

        emailPasswordSignUpUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateUserProfile(name, photoURL)
                navigate('/')
            })
            .catch(error => console.error(error))
            .finally(() => {
                setLoading(false)
            })
    };

    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => { console.error(error) })
            .finally(() => {
                setLoading(false)
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left mb-6">
                    <h1 className="text-5xl font-bold">Please Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Full Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your full name" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Enter your photoURl" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
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

                        <div className="form-control">
                            <div className="flex flex-start">
                                <input type="checkbox" className="checkbox checkbox-primary" onClick={handleAccepted} />
                                <small className=" ml-2 font-semibold">Accept
                                    <Link to="/terms"> <span className='text-primary'>Terms and Conditions</span></Link></small>
                            </div>

                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary" type='submit' disabled={!accepted}>Register</button>
                            <small className='mt-3 font-semibold'>Already have an account? <Link to='/login'><span className='text-primary'>Login.</span></Link></small>
                        </div>

                    </form>
                </div>
            </div >
        </div >
    );
};

export default Register;