import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center scrollbar-hidden bg-base-100">
                {/* <!-- Page content here --> */}
                <Outlet />


            </div>
            <div className="drawer-side ">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-primary text-white text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/dashboard'>My Profile</NavLink></li>
                    {!admin && <><li><NavLink to='/dashboard/orders'>My Orders</NavLink></li>
                        <li><NavLink to='/dashboard/addReview'>Add a review</NavLink></li></>}
                    {admin &&
                        <>
                            <li><NavLink to='/dashboard/addProducts'>Add Products</NavLink></li>
                            <li><NavLink to='/dashboard/users'>Manage Users</NavLink></li>
                            <li><NavLink to='/dashboard/manageOrders'>Manage Orders</NavLink></li>
                            <li><NavLink to='/dashboard/manageProducts'>Manage Products</NavLink></li>

                        </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;