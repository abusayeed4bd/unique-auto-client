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
        <div className="py-12 bg-base-200">
            <h2 className="text-5xl text-primary font-bold uppercase text-center">Our Products</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;