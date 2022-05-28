import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const { data: products, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/products').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl text-primary">
                Manage Products
            </h2>


            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRow product={product} refetch={refetch} index={index} key={product._id} ></ProductRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;