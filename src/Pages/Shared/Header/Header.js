import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo3.png';
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { useState } from 'react';
import { HiMoon, HiOutlineSun } from "react-icons/hi";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';


const Header = () => {
    const activeClassName = 'bg-base-300';

    const { user, logOutUser } = useContext(AuthContext);

    const [status, setStatus] = useState(false);
    const handleDarkMode = () => {
        setStatus(!status);
    }

    const handleLogOut = () => {
        logOutUser()
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }

    return (

        <div className="navbar bg-neutral text-neutral-content py-3 lg:px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>{user?.uid ?
                            <>

                                {
                                    user?.photoURL ?
                                        <div className="avatar  mb-3 flex lg:hidden">
                                            <div className=" w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" >
                                                <img className="tooltip tooltip-bottom" data-tip="hello" src={user?.photoURL} alt='' />
                                            </div>
                                        </div>
                                        :
                                        <div class=" flex lg:hidden overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 mr-5 online avatar mb-3">
                                            <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                        </div>
                                }
                                <button className='btn btn-outline btn-primary flex lg:hidden' >LogOut</button>
                            </>
                            :
                            <Link to='/login' className='mb-2 btn btn-outline btn-primary  lg:hidden flex'>Login</Link>
                        }</li>

                        <li><NavLink to='/home' className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }>Home</NavLink></li>

                        <li><NavLink to='/courses' className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }>Courses</NavLink></li>

                        <li><NavLink to='/blog' className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }>Blog</NavLink></li>
                        <li><NavLink to='/faq' className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }>FAQ</NavLink></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case font-bold lg:text-4xl text-2xl flex content-center ">
                    <img src={Logo} alt="" className='w-12 mt-4 lg:mx-3' /> <div>Akadimia</div></Link>
            </div>
            <div className="navbar-center hidden lg:flex font-semibold">
                <ul className="menu menu-horizontal p-0">

                    <li><NavLink to='/home' className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }>Home</NavLink></li>

                    <li><NavLink to='/courses' className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }>Courses</NavLink></li>

                    <li><NavLink to='/blog' className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }>Blog</NavLink></li>
                    <li ><NavLink to='/faq' className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }>FAQ</NavLink></li>

                </ul>
            </div>
            <div className="navbar-end font-semibold">
                <div className='mr-2'>
                    {status ? <HiMoon className='text-xl' /> : < HiOutlineSun className='text-xl' />}
                </div>
                <input type="checkbox" className="toggle toggle-primary" checked={status} onClick={handleDarkMode} />




                <div className='ml-5'>
                    {user?.uid ?
                        <div className='flex justify justify-center items-center tooltip  tooltip-bottom' data-tip={user?.displayName}>
                            {
                                user?.photoURL ?
                                    <div className="avatar online mr-5 hidden lg:flex">
                                        <div className=" w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" >
                                            <img className="tooltip tooltip-bottom" data-tip="hello" src={user?.photoURL} alt='' />
                                        </div>
                                    </div>
                                    :
                                    <div class=" overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 mr-5 online hidden lg:flex">
                                        <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                    </div>
                            }

                            <button className='btn btn-outline btn-primary hidden lg:flex' onClick={handleLogOut} >LogOut</button>
                        </div>
                        :
                        <Link to='/login' className='mr-2 btn btn-outline btn-primary hidden lg:flex'>Login</Link>
                    }
                </div>
            </div>
        </div >

    );
};

export default Header;