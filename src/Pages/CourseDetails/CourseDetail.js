import React from 'react';
import { FaCrown } from 'react-icons/fa';
import { CgSoftwareDownload } from "react-icons/cg";
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const selectedCourse = useLoaderData();
    console.log(selectedCourse);
    const { _id, duration, title, total_reviews, details, starting_date, image_url, prerequisites, } = selectedCourse;

    return (
        <div className='flex m-5 rounded-lg shadow-xl'>
            <div className='w-2/5'>
                <img src={image_url} alt="" className='w-full rounded-l-lg  h-full' />
            </div>
            <div className='px-20 py-5'>
                <h1 className='text-5xl font-semibold mb-10'>{title} <button><CgSoftwareDownload className='inline text-primary' /></button></h1>
                <p className='mb-4'>{details}</p>
                <p className='font-semibold text-xl'>Estimate time</p>
                <p className='mb-2'>{duration}</p>
                <p className='mb-2 font-semibold text-xl'>{total_reviews} reviews</p>
                <p className='font-semibold text-xl'>Enroll by </p>
                <p className='mb-2'>{starting_date}</p>
                <p className='font-semibold text-xl'>Prerequisites</p>
                <p className='mb-7'>{prerequisites}</p>
                <Link to={`/checkout/${_id}`}><button className='btn btn-primary'><FaCrown className='text-warning mr-3 text-xl' /> Get premium access</button></Link>
            </div>
        </div >
    );
};

export default CourseDetail;