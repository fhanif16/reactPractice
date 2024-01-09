import React, { useEffect, useState } from 'react';
import './PriceList.css'
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {
    const [prices , setPrices] = useState([]);
    useEffect( ()=> {
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data))
},[])
    return (
        <div>
            
            <h1 className='text-5xl text-center bg-blue-400 font-bold p-4'> Awesome Prices</h1>
            <div className='grid md:grid-cols-3 gap-3 m-5 '>
            {
                prices.map(price => <PriceCart
              key ={price.id} 
              price ={price} ></PriceCart>)

              
            }

           
            </div>
            
        </div>
    );
};

export default PriceList;