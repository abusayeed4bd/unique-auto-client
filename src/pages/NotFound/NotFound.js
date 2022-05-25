import React from 'react';
import notfound from '../../image/404.png'

const NotFound = () => {
    return (
        <div className="h-screen flex justify-center">
            <img className="h-full" src={notfound} alt="" />
        </div>
    );
};

export default NotFound;