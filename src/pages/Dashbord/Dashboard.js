import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {

    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center  bg-base-200">
                {/* <!-- Page content here --> */}
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side ">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/dashboard'>My Profile</NavLink></li>
                    <li><NavLink to='/dashboard/orders'>My Orders</NavLink></li>
                    <li><NavLink to='/dashboard/addReview'>Add a review</NavLink></li>
                    <li><NavLink to='/dashboard/addProducts'>Add Products</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;