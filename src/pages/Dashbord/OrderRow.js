import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, refetch }) => {
    const { _id, name, email, product, quantity, price, paid } = order;

    const handleDelete = () => {

        const proceed = window.confirm('are you sure to delete this order');

        if (proceed) {

            fetch(`https://unique-auto-parts.herokuapp.com/order/${_id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{product}</td>
            <td>{quantity}</td>
            <td>${price}</td>
            <td>{paid || <button onClick={handleDelete} className='btn btn-xs'>Cencel</button>}</td>
            <td>
                {paid ?
                    <button className="btn btn-success btn-xs">Paid</button> :
                    <Link to={`/payment/${order._id}`} className='btn btn-xs'>Pay</Link>
                }
            </td>
        </tr>
    );
};

export default OrderRow;