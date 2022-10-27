import React from 'react';
import { FaCrown } from 'react-icons/fa';
import { CgSoftwareDownload } from "react-icons/cg";
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';


const CourseDetail = () => {
    const ref = useRef();
    const selectedCourse = useLoaderData();
    console.log(selectedCourse);
    const { _id, duration, title, total_reviews, details, starting_date, image_url, prerequisites, } = selectedCourse;

    return (
        <div className='flex flex-col md:flex-row m-2 lg:m-5 rounded-lg shadow-lg bg-neutral text-neutral-content'>
            <div className='w-full lg:w-2/5'>
                <img src={image_url} alt="" className='w-full rounded-l-lg  h-full' />
            </div>
            <div ref={ref} className='w-full px-20 py-5'>
                <h1 className='text-3xl lg:text-5xl font-semibold mb-10'>{title}<ReactToPrint trigger={() => <button className=' tooltip  tooltip-bottom' data-tip='Download'><CgSoftwareDownload className='inline text-primary' /></button>} content={() => ref.current} /></h1>
                <p className='mb-4'>{details}</p>
                <p className='font-semibold text-xl'>Estimate time</p>
                <p className='mb-2'>{duration}</p>
                <p className='mb-2 font-semibold text-xl'>{total_reviews} reviews</p>
                <p className='font-semibold text-xl'>Enroll by </p>
                <p className='mb-2'>{starting_date}</p>
                <p className='font-semibold text-xl'>Prerequisites</p>
                <p className='mb-7'>{prerequisites}</p>

                <Link to={`/checkout/${_id}`}><button className='btn btn-primary pb-3 lg:pb-0 '><FaCrown className='text-warning mr-3 text-xl' /> Get premium access</button></Link>
            </div>


        </div >
    );
};

export default CourseDetail;