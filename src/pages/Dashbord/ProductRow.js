import React from 'react';

const ProductRow = ({ product, index, refetch }) => {
    const { _id } = product;
    const hendleDelete = () => {
        const proceed = window.confirm('are you sue to delete product?')
        if (proceed) {
            fetch(`https://unique-auto-parts.herokuapp.com/product/${_id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(res => res.json())
                .then(data => {
                    refetch()
                })
        }
    }
    return (
        <tr>
            <th>{index}</th>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td><button onClick={hendleDelete} className='btn btn-xs'>delete</button></td>
        </tr>
    );
};

export default ProductRow;