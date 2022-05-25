import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, price, minOrder, description, available } = product;
    const navigate = useNavigate();
    return (
        <div class="card card-compact   shadow-xl bg-base-100 ">
            <figure><img className="h-[200px]" src={img} alt="Shoes" /></figure>
            <div class="card-body text-center">
                <h2 class="text-4xl text-secondary font-bold">{name}</h2>
                <p className='text-2xl text-primary'>Price: ${price}</p>
                <p className="text-xl">Min-Order : {minOrder}</p>
                <p className="text-xl">Available : {available}</p>
                <p>{description}</p>
                <div class="card-actions justify-center">
                    <button onClick={() => navigate(`/product/${_id}`)} class="btn btn-primary w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;