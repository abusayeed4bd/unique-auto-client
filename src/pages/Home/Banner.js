import React from 'react';
import banner from '../../image/banner.png'
import bannerBg from '../../image/bannerBg.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerBg})` }} class="hero h-screen bg-base-200 lg:h-[90vh]">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="max-w-sm rounded-lg  w-2/3 lg:w-1/2" alt='' />
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 class="text-5xl font-bold">OEM and Aftermarket
                        Auto Parts Wholesale</h1>
                    <p class="py-6">We pride foremost on servicing custom and hard-to-find auto parts for your business needs, especially parts for classic cars, motorcycles and trucks, offering a complete supply chain solution to independent distributors, dealerships and wholesalers.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;