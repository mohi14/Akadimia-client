import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo3.png';
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { useState } from 'react';


const Header = () => {
    const activeClassName = 'bg-base-300';
    const [user, setUser] = useState(null)

    const [status, setStatus] = useState(false);
    const handleDarkMode = () => {
        setStatus(!status);
    }

    return (
        <div>
            <div className="navbar bg-info-content py-3 lg:px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Item 1</Link></li>
                            <li tabIndex={0}>
                                <Link className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2">
                                    <li><Link>Submenu 1</Link></li>
                                    <li><Link>Submenu 2</Link></li>
                                </ul>
                            </li>
                            <li><Link>Item 3</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case lg:text-4xl text-2xl flex content-center ">
                        <img src={Logo} alt="" className='w-12 mt-4 lg:mx-3' /> <div>Akadimia</div></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className="tooltip tooltip-left" data-tip="hello"><NavLink to='/home' className={({ isActive }) =>
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
                <div className="navbar-end">
                    {status ? 'Dark' : 'Light'}
                    <input type="checkbox" className="toggle toggle-primary " checked={status} onClick={handleDarkMode} />


                    <>
                        {user?.uid ?
                            <>
                                <span>{user?.displayName}</span>
                                <button className='btn' >LogOut</button>
                            </>
                            : <>
                                <Link to='/login'>Log In</Link>
                                <Link to='/register'>Register</Link>
                            </>

                        }
                    </>
                </div>
            </div>
        </div>
    );
};

export default Header;