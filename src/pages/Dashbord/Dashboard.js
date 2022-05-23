import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center bg-base-200">
                {/* <!-- Page content here --> */}
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side lg:z-10  relative">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/dashboard/add'>Sidebar Item 1</NavLink></li>
                    <li><NavLink to='/dashboard/add'>Sidebar Item 1</NavLink></li>
                    <li><NavLink to='/dashboard/add'>Sidebar Item 1</NavLink></li>


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;