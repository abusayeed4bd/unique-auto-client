import React from 'react';
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';

const Purchese = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { _id, name, img, price, minOrder, description, available } = product;
    const [quantity, setQuantity] = useState(minOrder);
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data =>
                setProduct(data)

            )
    }, [id])
    const handleQuantity = event => {
        setQuantity(event.target.value);
    }

    return (
        <div class="card card-compact    bg-base-100 my-12">
            <figure><img className="h-[200px]" src={img} alt="Shoes" /></figure>
            <div class="card-body text-center">
                <h2 class="text-4xl text-secondary font-bold">{name}</h2>
                <p className='text-2xl text-primary'>Price: ${price}</p>
                <p className="text-xl">Quantity : <input className='input input-bordered' onChange={handleQuantity} type="number" value={quantity} /></p>

                <p>{description}</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Purchese;