import React from 'react';
import banner from '../../image/banner.png'
import bannerBg from '../../image/bannerBg.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerBg})` }} className="hero h-screen bg-base-200 lg:h-[90vh]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img data-aos="fade-left" data-aos-duration="1000" src={banner} className="max-w-sm rounded-lg  w-2/3 lg:w-1/2" alt='' />
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 data-aos="fade-right" data-aos-duration="1000" className="text-5xl font-bold">OEM and Aftermarket
                        Auto Parts Wholesale</h1>
                    <p data-aos="fade-right" data-aos-duration="1000" className="py-6">We pride foremost on servicing custom and hard-to-find auto parts for your business needs, especially parts for classic cars, motorcycles and trucks, offering a complete supply chain solution to independent distributors, dealerships and wholesalers.</p>
                    <button data-aos="fade-right" data-aos-duration="1000" className="btn btn-primary text-white ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;