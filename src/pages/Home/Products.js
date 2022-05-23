import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="py-12 bg-base-100">
            <div className="mb-8">
                <h3 className="text-xl text-secondary text-center">What We Make</h3>
                <h2 className="text-5xl text-primary font-bold uppercase text-center ">Our Products</h2>
                <p className="text-center text-lg text-slate-400">We are one of the best-in-class aftermarket automotive headlight manufacturers based in China.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto w-[90%]">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;