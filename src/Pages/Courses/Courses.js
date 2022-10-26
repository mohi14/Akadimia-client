import React from 'react';
import { Outlet } from 'react-router-dom';
import CoursesField from './CoursesField/CoursesField';
import LeftSideNav from './LeftSideNav/LeftSideNav';

const Courses = () => {
    return (
        <div className='flex'>
            <div className='w-1/4 dark:bg-gray-800 bg-white h-full'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='w-3/4 '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Courses;