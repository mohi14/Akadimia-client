import React from 'react';
import { FaClock, FaSignal } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CoursesCard = ({ course }) => {

    return (
        <div className="card w-full bg-base-100 drop-shadow-xl">
            <figure><img src={course.image_url} alt="Shoes" className='w-full h-60' /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <FaSignal className='text-primary inline-block mr-2'></FaSignal>
                        {course.level}

                    </div>
                    <div className='flex items-center'>
                        <FaClock className='text-primary inline-block mr-2'></FaClock>
                        {course.duration}
                    </div>
                </div>
                <h2 className="card-title pt-5 text-primary font-bold">{course.title}</h2>
                <p className='mb-5'>
                    {course.details.length > 100 ?
                        <>{course.details.slice(0, 100) + '...'}</>
                        : course.details}</p>
                <div className="card-actions justify-end">
                    <Link to={`/courses/${course._id}`}><button className="btn btn-primary">Course Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CoursesCard;