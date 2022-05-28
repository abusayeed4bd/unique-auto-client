import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L27mkEtmtQujlnxSz02ZZbDSFWPZCjgVpKZRWwt9OAUM1XqEiWmPN1yZ76zMKs1Y1BbxMBRttMwC1PUXmXv5jRh00ikFOu7sj');

const Payment = () => {
    const { id } = useParams();
    const url = `https://unique-auto-parts.herokuapp.com/payment/${id}`;
    const { data: order, isLoading } = useQuery(['payments', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:w-2/3 mx-auto h-screen my-12">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">

                    <h2 className="card-title">Hi, <span className="text-primary"> {order.name}</span></h2>
                    <h2 className="card-title">Please Pay for {order.product}</h2>
                    <h2 >Quantity {order.quantity}</h2>
                    <p>Your Total amount is: ${order.price}</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;