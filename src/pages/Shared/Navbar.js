import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../image/logo.png'

const Navbar = ({ children }) => {
    const [user] = useAuthState(auth)
    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    const { pathname } = useLocation()
    const menuItem = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/Products'>Products</NavLink></li>
            <li><NavLink to='/portfolio'>My Portfolio</NavLink></li>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
            {user ? <button onClick={logOut} className="btn btn-link">Log Out </button> : <li><NavLink to='/login'>Login</NavLink></li>}
        </>
    )
    return (
        <div class="navbar bg-base-100 sticky top-0 z-20 shadow-sm">
            <div class="navbar-start">
                {
                    pathname.includes('dashboard') && <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden"> <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M4 6h16M4 12h16M4 18h7'
                        />
                    </svg></label>
                }
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div class="navbar-end hidden lg:flex">

                <ul class="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div class="dropdown dropdown-end ml-auto">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItem}

                </ul>
            </div>

        </div>
    );
};

export default Navbar;