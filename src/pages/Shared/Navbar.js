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

            <li><NavLink to='/products'>Products</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>


            {user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>}
            {user ? <button onClick={logOut} className="btn btn-link">Log Out </button> : <li><NavLink to='/login'>Login</NavLink></li>}
        </>
    )
    return (
        <div className="navbar bg-base-100 sticky top-0 z-20 shadow-sm">
            <div className="navbar-start">
                {
                    pathname.includes('dashboard') && <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"> <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4 6h16M4 12h16M4 18h7'
                        />
                    </svg></label>
                }
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">

                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="dropdown dropdown-end ml-auto">
                {/* <label  class="btn btn-circle swap swap-rotate btn btn-ghost lg:hidden">


                    <input type="checkbox" />


                    <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>


                    <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                </label> */}
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItem}

                </ul>
            </div>

        </div>
    );
};

export default Navbar;