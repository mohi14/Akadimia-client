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
            <div className='w-1/4 dark:bg-gray-800 bg-white h-full'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='w-3/4 '>
                <h1>this is category</h1>
                {
                    allCourses.map(course => <CoursesCard
                        key={course._id}
                        course={course}
                    ></CoursesCard>)
                }
            </div>
        </div>
    );
};

export default CoursesField;