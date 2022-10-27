import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {
    const activeClassName = 'bg-base-300 w-full btn rounded-lg';
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://akadimia-server.vercel.app/course-category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='p-10'>
            <h1 className='text-center mb-4 pb-2 text-3xl font-semibold w-full border-b-2 border-b-primary text-gray-500  dark:text-gray-400'>All Categories</h1>
            {
                categories.map(category => <p className='text-xl font-semibold my-3 hover:bg-primary p-2 rounded-lg text-gray-500  dark:text-gray-400'>
                    <NavLink className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                        to={`/category/${category.id}`}
                    >{category.name}</NavLink>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;