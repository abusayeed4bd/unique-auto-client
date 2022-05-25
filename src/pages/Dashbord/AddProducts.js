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


        fetch('http://localhost:5000/products', {
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

                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text">Name</span>

                    </label>
                    <input type="text" name="name" placeholder="Name" class="input input-bordered w-full " />

                </div>
                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text">Price</span>

                    </label>
                    <input type="text" name="price" placeholder="Price" class="input input-bordered w-full " />

                </div>
                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text">Available</span>

                    </label>
                    <input type="number" name="available" placeholder="Available Quantity" class="input input-bordered w-full " />

                </div>
                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text">Min Order</span>

                    </label>
                    <input type="number" name="minOrder" placeholder="Min Order Quantity" class="input input-bordered w-full " />

                </div>
                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text">Photo URL</span>

                    </label>
                    <input type="text" name="img" placeholder="Photo URL" class="input input-bordered w-full " />

                </div>
                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text">Description</span>

                    </label>
                    <textarea type="text" name="description" cols="30" rows="5" placeholder="Description" class="input input-bordered w-full h-32" />


                </div>
                <input type="submit" class="btn btn-primary w-full my-2" value="Submit" />

            </form>
        </div>
    );
};

export default AddProducts;