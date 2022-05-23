import React from 'react';
import summery from '../../image/summery.jpg'

const Summery = () => {
    return (
        <div style={{ backgroundImage: `url(${summery}` }} class=" bg-fixed grid grid-cols-1 lg:grid-cols-3 py-12 my-12  gap-y-12">
            <div className="text-white text-center">
                <h2 className="text-5xl font-bold">40+</h2>
                <h2 className="text-3xl">Business Meeting</h2>
            </div>
            <div className="text-white text-center lg:border-x-2">
                <h2 className="text-5xl font-bold">$5M+</h2>
                <h2 className="text-3xl">Annual Revenue</h2>
            </div>
            <div className="text-white text-center">
                <h2 className="text-5xl font-bold">200+</h2>
                <h2 className="text-3xl">Retailer</h2>
            </div>



        </div>
    );
};

export default Summery;