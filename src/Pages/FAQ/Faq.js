import React from 'react';
import image from '../../assets/under-construction.png'

const Faq = () => {
    return (
        <div className='text-center'>
            <div>
                <img className='w-1/3 m-auto my-20' src={image} alt="" />
            </div>
            <h1 className=' text-primary mb-5 text-4xl font-semibold'>This page is under construction</h1>
            <p className='mb-10 text-lg'>I am working on it!</p>
        </div>
    );
};

export default Faq;