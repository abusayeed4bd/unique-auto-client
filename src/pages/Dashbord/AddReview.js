import React from 'react';

const AddReview = () => {
    return (

        <div className="bg-base-100 p-8 rounded-xl  m-5 w-1/2 text-center">
            <h2 className="text-3xl text-primary font-bold ">Add a Review</h2>
            <form className="w-[90%] mx-auto">

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>

                    </label>
                    <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />

                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Title</span>

                    </label>
                    <input type="text" placeholder="ex: CEO" class="input input-bordered w-full max-w-xs" />

                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Ratings</span>

                    </label>
                    <input type="number" placeholder="ratings out of 5" class="input input-bordered w-full max-w-xs" />

                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Review</span>

                    </label>
                    <textarea type="text" placeholder="Review" class="input input-bordered w-full max-w-xs" />

                </div>

            </form>
        </div>

    );
};

export default AddReview;