import React from 'react';
import whyus from '../../image/whyus.png'

const WhyUs = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 w-[90%] lg:mx-12 items-center lg:gap-8 mx-auto'>
            <div>
                <img className='w-full' src={whyus} alt="" />
            </div>
            <div>
                <h2 className="text-primary text-5xl my-5 font-bold">
                    Why Us
                </h2>
                <p className='text-xl'>We pride foremost on servicing custom and hard-to-find auto parts for your business needs, especially parts for classic cars, motorcycles and trucks, offering a complete supply chain solution to independent distributors, dealerships and wholesalers.</p>
            </div>
        </div>
    );
};

export default WhyUs;