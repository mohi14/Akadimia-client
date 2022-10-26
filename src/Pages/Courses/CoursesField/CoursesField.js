import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CoursesCard from '../../CoursesCard/CoursesCard';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const CoursesField = () => {
    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])
    return (
        <div className='flex'>
            <div className='w-1/4 dark:bg-gray-800 bg-white h-auto hidden lg:flex'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className=' w-full lg:w-3/4 p-10 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    allCourses.map(course => <CoursesCard
                        key={course._id}
                        course={course}
                    ></CoursesCard>)
                }
            </div>
        </div >
    );
};

export default CoursesField;