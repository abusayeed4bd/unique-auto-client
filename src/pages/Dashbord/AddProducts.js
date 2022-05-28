import React from 'react';
import { toast } from 'react-toastify';

const AddProducts = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const minOrder = event.target.minOrder.value;
        const img = event.target.img.value;
        const available = event.target.available.value;
        const description = event.target.description.value;


        fetch('https://unique-auto-parts.herokuapp.com/products', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                img, name, minOrder, available, price, description
            }),
        }).then(res => res.json())
            .then(data => {
                toast.success(` ${name} Added successfully`)
            })

    }
    return (
        <div className="bg-base-100 p-8 rounded-xl  m-5 w-1/2 text-center">
            <h2 className="text-3xl text-primary font-bold ">Add a Product</h2>
            <form onSubmit={handleAddProduct} className="w-[90%] mx-auto">

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Price</span>

                    </label>
                    <input type="text" name="price" placeholder="Price" className="input input-bordered w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Available</span>

                    </label>
                    <input type="number" name="available" placeholder="Available Quantity" className="input input-bordered w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Min Order</span>

                    </label>
                    <input type="number" name="minOrder" placeholder="Min Order Quantity" className="input input-bordered w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Photo URL</span>

                    </label>
                    <input type="text" name="img" placeholder="Photo URL" className="input input-bordered w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Description</span>

                    </label>
                    <textarea type="text" name="description" cols="30" rows="5" placeholder="Description" className="input input-bordered w-full h-32" />


                </div>
                <input type="submit" className="btn btn-primary w-full my-2" value="Submit" />

            </form>
        </div>
    );
};

export default AddProducts;