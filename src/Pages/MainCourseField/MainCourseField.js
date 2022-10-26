import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../Courses/LeftSideNav/LeftSideNav';
import CoursesCard from '../CoursesCard/CoursesCard';

const MainCourseField = () => {
    const courses = useLoaderData();
    return (
        <div className='flex'>
            <div className='w-1/4 dark:bg-gray-800 bg-white h-auto hidden lg:flex'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='w-3/4 p-10 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    courses.map(course => <CoursesCard
                        key={course._id}
                        course={course}></CoursesCard>)
                }
            </div>

        </div>
    );
};

export default MainCourseField;