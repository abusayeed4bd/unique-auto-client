import React from 'react';

const Review = ({ review }) => {
    const { name, comment, rating, title } = review;
    return (
        <div data-aos="flip-up" data-aos-duration="1000" className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{comment}</p>
                <div className="flex items-center justify-center">
                    <span>{rating}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="orange">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                </div>
                <h2 className="text-2xl text-primary font-bold">{name}</h2>
                <p className="text-secondary">{title}</p>

            </div>
        </div>
    );
};

export default Review;