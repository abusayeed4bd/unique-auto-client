import React from 'react';
import Banner from './Banner';
import Products from './Products';
import Summery from './Summery';

const Home = () => {
    return (
        <div className="relative">
            <Banner></Banner>
            <Products></Products>
            <Summery></Summery>
        </div>
    );
};

export default Home;