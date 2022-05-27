import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';
import OrderRow from './OrderRow';

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://unique-auto-parts.herokuapp.com/orders/${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-primary text-3xl font-bold py-5">My Order</h2>
            <div class="overflow-x-auto w-full">
                <table class="table max-w-xs lg:max-w-lg w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Product</th>
                            <th> Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrderRow key={order._id} order={order} index={index} refetch={refetch}></OrderRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrder;