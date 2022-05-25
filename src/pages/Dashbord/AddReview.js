import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {
    const handleAddReview = event => {
        event.preventDefault();
        const name = event.target.name.value;

        const title = event.target.title.value;
        const rating = event.target.rating.value;
        const review = event.target.review.value;

        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name, title, rating, comment: review
            }),
        }).then(res => res.json())
            .then(data => {
                toast.success(`Review added successfully from ${name}`)
            })

    }
    return (

        <div className="bg-base-100 p-8 rounded-xl  m-5 w-1/2 text-center">
            <h2 className="text-3xl text-primary font-bold ">Add a Review</h2>
            <form onSubmit={handleAddReview} className="w-[90%] mx-auto">

                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text">Name</span>

                    </label>
                    <input type="text" name="name" placeholder="Name" class="input input-bordered w-full " />

                </div>
                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text">Title</span>

                    </label>
                    <input type="text" name="title" placeholder="ex: CEO" class="input input-bordered w-full " />

                </div>
                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text">Ratings</span>

                    </label>
                    <input type="number" name="rating" placeholder="ratings out of 5" class="input input-bordered w-full " />

                </div>
                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text">Review</span>

                    </label>
                    <textarea type="text" name="review" cols="30" rows="5" placeholder="Review" class="input input-bordered w-full h-32" />


                </div>
                <input type="submit" class="btn btn-primary w-full my-2" value="Submit" />

            </form>
        </div>

    );
};

export default AddReview;