import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
    const {features} = option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <div className=''>
                <h3><span className='text-6xl font-bold text-white'>${option.price}</span> <span className='text-2xl text-gray-100'>/month</span></h3>
                <p className='text-3xl my-4'>{option.name}</p>
            </div>
            {
                features.map(feature => <Feature feature={feature}></Feature>)
            }
            <button className='bg-gray-200 mt-4 w-full rounded-md py-2 text-black font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceOption;