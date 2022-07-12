import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';


const Products = () => {

    const { data: products, isLoading } = useQuery('products', () => fetch('https://unique-auto-parts.herokuapp.com/products')
        .then(res => res.json()))
    // fetch('https://unique-auto-parts.herokuapp.com/products')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="py-12 bg-base-100">
            <div data-aos="zoom-in" data-aos-duration="1000" className="mb-8">
                <h3 className="text-xl text-secondary text-center">What We Make</h3>
                <h2 className="text-5xl text-primary font-bold uppercase text-center ">Our Products</h2>
                <p className="text-center text-lg text-slate-400">We are one of the best-in-class aftermarket automotive headlight manufacturers based in China.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5 lg:mx-auto lg:w-[90%]">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;