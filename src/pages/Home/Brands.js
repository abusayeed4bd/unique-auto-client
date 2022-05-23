import React from 'react';
import mazda from '../../image/brand/mazda.jpg'
import bmw from '../../image/brand/bmw.jpg'
import lexus from '../../image/brand/lexus.jpg'
import ford from '../../image/brand/ford.jpg'
import marcedese from '../../image/brand/marcedese.jpg'

const Brands = () => {
    return (

        <div className=" py-12">
            <h2 className="text-center text-primary font-bold pb-12 text-5xl uppercase">Brands We Offer</h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 lg:w-[90%] lg:mx-auto">
                <img className="hover:shadow-xl p-5 rounded-xl" src={mazda} alt="" />
                <img className="hover:shadow-xl p-5 rounded-xl" src={bmw} alt="" />
                <img className="hover:shadow-xl p-5 rounded-xl" src={lexus} alt="" />
                <img className="hover:shadow-xl p-5 rounded-xl" src={ford} alt="" />
                <img className="hover:shadow-xl p-5 rounded-xl" src={marcedese} alt="" />
            </div>
        </div>
    );
};

export default Brands;