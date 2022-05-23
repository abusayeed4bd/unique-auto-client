import React from 'react';

const Product = ({ product }) => {
    const { name, img, price, minOrder, description, available } = product;
    return (
        <div class="card card-compact w-96  shadow-xl bg-base-100">
            <figure><img className="h-[200px]" src={img} alt="Shoes" /></figure>
            <div class="card-body text-center">
                <h2 class="text-4xl text-secondary font-bold">{name}</h2>
                <p className='text-2xl text-primary'>Price: ${price}</p>
                <p className="text-xl">Min-Order : {minOrder}</p>
                <p className="text-xl">Available : {available}</p>
                <p>{description}</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;