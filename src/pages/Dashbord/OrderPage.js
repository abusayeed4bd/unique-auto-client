import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const OrderPage = ({ product }) => {

    const { name, price, minOrder, available } = product;
    const [user, loading] = useAuthState(auth)

    const [total, setTotal] = useState(0);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleQuantityChange = event => {
        const quantity = event.target.value;
        const totalPrice = parseInt(quantity) * parseInt(price);
        setTotal(totalPrice)
    }
    useEffect(() => {
        (async () => {
            if (price && minOrder) {
                const totalPrice = price * minOrder;
                setTotal(totalPrice)
            };
        })();
    }, [price, minOrder]);



    const handleOrder = (event) => {
        event.preventDefault()

        const email = event.target.email.value;
        const customer = event.target.name.value;
        const quantity = parseInt(event.target.quantity.value);
        const price = parseInt(event.target.price.value);
        const address = event.target.address.value;


        const order = {
            name: customer, email, quantity, price, address, product: name
        }



        fetch('https://unique-auto-parts.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    event.target.reset();
                    toast.success('Order added to card. Please confirm payment');
                    navigate('/dashboard/orders');
                }

            })

    }
    if (loading || !user) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl text-primary font-bold">
                Place Your Order
            </h2>
            <form onSubmit={handleOrder} className="mt-8" >

                <div className="rounded-md shadow-sm space-y-3">

                    <div className="w-full mx-auto">
                        <label >Name</label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" value={user?.displayName} readOnly />
                    </div>
                    <div className="w-full mx-auto">
                        <label >Email</label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" value={user?.email} readOnly />
                    </div>
                    <div className="w-full mx-auto">
                        <label >Quantity</label>
                        <input min={minOrder} max={available} onChange={handleQuantityChange} type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full" defaultValue={minOrder} required />
                    </div>
                    <div className="w-full mx-auto">
                        <label >Price</label>
                        <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" value={total} readOnly />
                    </div>
                    <div className="w-full mx-auto">
                        <label >Address</label>
                        <input type="text" name="address" placeholder="Address" className="input input-bordered w-full" required />
                    </div>
                    {error && <p className='text-primary'>{error}</p>}
                    <input type="submit" className="btn btn-primary w-full" value="Place Order" />



                </div>




            </form>
        </div>
    );
};

export default OrderPage;