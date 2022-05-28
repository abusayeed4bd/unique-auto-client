import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import OrderPage from './OrderPage';

const ManageOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://unique-auto-parts.herokuapp.com/orders').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl text-primary">Manage Orders: </h2>


            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product </th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order?.name}</td>
                                <td>{order?.email}</td>
                                <td>{order?.product}</td>
                                <td>${order?.price}</td>
                                <td>{order?.paid ? <button className='btn btn-xs btn-success'>paid</button> : <button className='btn btn-xs btn-primary'>Unpaid</button>}</td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;