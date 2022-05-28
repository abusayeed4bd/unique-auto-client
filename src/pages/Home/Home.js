import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import Products from './Products';
import Reviews from './Reviews';
import Summery from './Summery';
import WhyUs from './WhyUs';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Products></Products>
            <Summery></Summery>
            <Reviews></Reviews>
            <WhyUs></WhyUs>
            <Brands></Brands>
        </div>
    );
};

export default Home;