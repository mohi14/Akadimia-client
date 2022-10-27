import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../Courses/LeftSideNav/LeftSideNav';
import CoursesCard from '../CoursesCard/CoursesCard';

const MainCourseField = () => {
    const courses = useLoaderData();
    return (
        <>
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <p className='mr-2'>Categories</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current text-primary"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <LeftSideNav></LeftSideNav>
                </ul>
            </div>


            <div className='flex'>
                <div className='w-1/4 dark:bg-gray-800 bg-white h-auto hidden lg:flex'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='w-full lg:w-3/4 p-10 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {
                        courses.map(course => <CoursesCard
                            key={course._id}
                            course={course}></CoursesCard>)
                    }
                </div>

            </div>
        </>
    );
};

export default MainCourseField;