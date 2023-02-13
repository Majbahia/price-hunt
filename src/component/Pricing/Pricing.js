import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions=[
        {id:1, name:'Free', price:0.00, features:[
            'KwFinder',
            'Moz Pro',
            'LongTail Pro',
            'Ubersuggest Pro',
            'Woorank',
            'Link Indexer',
            'Seamrash'
        ]
    },
        {id:2, name:'Medium', price:9.99, features:[
            'KwFinder',
            'Moz Pro',
            'LongTail Pro',
            'Ubersuggest Pro',
            'Woorank',
            'Link Indexer',
            'Seamrash'
        ]
    },
        {id:3, name:'Premium', price:19.99, features:[
            'KwFinder',
            'Moz Pro',
            'LongTail Pro',
            'Ubersuggest Pro',
            'Woorank',
            'Link Indexer',
            'Seamrash'
        ]
    },
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold p-4 mt-4 mb-1 bg-indigo-300 text-white'>Best Deal of thid Season</h2>
            <div className='grid md:grid-cols-3 gap-3'>
            {
                pricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default Pricing;