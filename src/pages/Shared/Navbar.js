import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../image/logo.png'

const Navbar = ({ children }) => {
    return (
        <div class="navbar bg-base-100 sticky top-0 z-10 shadow-sm">
            <div class="navbar-start">

                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div class="navbar-end hidden lg:flex">

                <ul class="menu menu-horizontal p-0">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/blog'>Blog</NavLink></li>
                    <li><NavLink to='/Products'>Products</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </ul>
            </div>
            <div class="dropdown dropdown-end ml-auto">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/blog'>Blog</NavLink></li>
                    <li><NavLink to='/Products'>Products</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>


                </ul>
            </div>

        </div>
    );
};

export default Navbar;