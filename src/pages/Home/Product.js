import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, price, minOrder, description, available } = product;
    const navigate = useNavigate();
    return (
        <div data-aos="zoom-in-up" data-aos-duration="1000" className="card card-compact   shadow-xl bg-base-100 ">
            <figure><img className="h-[200px]" src={img} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="text-4xl text-secondary font-bold">{name}</h2>
                <p className='text-2xl text-primary'>Price: ${price}</p>
                <p className="text-xl">Min-Order : {minOrder}</p>
                <p className="text-xl">Available : {available}</p>
                <p>{description}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => navigate(`/product/${_id}`)} className="btn btn-primary w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;