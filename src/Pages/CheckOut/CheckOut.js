import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const course = useLoaderData();
    const { title, image_url, level } = course;

    const { user } = useContext(AuthContext);

    return (
        <div>

            <div className="flex  justify-center my-20 ">

                <div className="bg-neutral text-neutral-content flex flex-col items-center pb-10 border-2 border-primary w-full lg:w-1/2 rounded-lg">
                    <img className="my-5 w-40 h-40 rounded-full shadow-lg" src={image_url} alt="" />
                    <h5 className="mb-1 text-3xl font-semibold">{title}</h5>
                    <span className="text-md mb-5">{level} level</span>
                    <h1 className='text-2xl font-semibold'>Name</h1>
                    <p className='text-lg mb-3'>{user?.displayName}</p>
                    <h2 className='text-2xl font-semibold'>Email</h2>
                    <p className='text-lg'>{user?.email}</p>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <Link className="btn btn-primary">Buy now</Link>
                        <Link to='/courses' className="btn btn-primary btn-outline">View all courses</Link>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default CheckOut;