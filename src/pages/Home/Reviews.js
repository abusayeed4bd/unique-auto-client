import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='text-center py-12'>
            <div className="mb-8">
                <h3 className="text-xl text-secondary text-center">What Our Customer Say</h3>
                <h2 className="text-5xl text-primary font-bold uppercase text-center ">Reviews</h2>
                <p className="text-center text-lg text-slate-400">We are one of the best-in-class aftermarket automotive headlight manufacturers based in China.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5 lg:mx-auto lg:w-[90%]">
                {
                    reviews.map(review => <Review review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;