import React from 'react';
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import OrderPage from './Dashbord/OrderPage';

const Purchese = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState({});
    const { _id, name, img, price, minOrder, description, available } = product;

    useEffect(() => {
        fetch(`https://unique-auto-parts.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data =>
                setProduct(data)

            )
    }, [id])



    return (
        <div className='py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:w-2/3 mx-auto'>
            <div class="card card-compact   bg-base-100 ">
                <figure><img className="h-[200px]" src={img} alt="Shoes" /></figure>
                <div class="card-body text-center">
                    <h2 class="text-4xl text-secondary font-bold">{name}</h2>
                    <table className='table table-full'>

                        <tbody>
                            <tr>
                                <th>price:</th>
                                <td>${price}</td>
                            </tr>
                            <tr>
                                <th>Min Order</th>
                                <td>{minOrder}</td>

                            </tr>
                            <tr>
                                <th>Available </th>
                                <td>{available}</td>

                            </tr>
                        </tbody>
                    </table>
                    {/* <p className='text-2xl text-primary'>Price: ${price}</p>
                    <p className="text-xl">Min-Order : {minOrder}</p>
                    <p className="text-xl">Available : {available}</p>
                    <p>{description}</p> */}

                </div>
            </div>
            <div class="card card-compact    bg-base-100">
                <OrderPage product={product} user={user}></OrderPage>
            </div>

        </div>
    );
};

export default Purchese;