import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../Courses/LeftSideNav/LeftSideNav';

const MainCourseField = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='flex'>
            <div className='w-1/4 dark:bg-gray-800 bg-white h-full'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='w-3/4'>

            </div>

        </div>
    );
};

export default MainCourseField;