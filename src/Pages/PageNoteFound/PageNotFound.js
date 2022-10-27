import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>

            <div className='bg-neutral m-10 lg:m-20 p-16 text-center rounded-xl shadow-xl'>
                <h1 className='text-6xl lg:text-9xl font-bold mb-16 '>Oops!</h1>
                <h5 className=' text-2xl lg:text-4xl font-semibold mb-5 text-primary'>404- PAGE NOT FOUND</h5>
                <p className='mb-5 text-lg'>The page your are looking for might have been removed <br /> had its name changed or is temporarily unavailable.</p>
                <Link to='/'><button className='btn btn-primary'>Go to homepage</button></Link>
            </div>
        </div>
    );
};

export default PageNotFound;