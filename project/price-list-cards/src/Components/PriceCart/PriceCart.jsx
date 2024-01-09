import React from 'react';
import './PriceCart.css'
import Features from '../Features/Features';


const PriceCart = ({price}) => {
    return (
        <div className='bg-blue-100 mt-4 rounded-md p-4 flex flex-col'>
          <h1 className='text-2xl font-bold m-5 p-4 border-4 text-center'>  {price.name}</h1>
         <div className='flex gap-3  bg-red-300'>
         <p>{price.membershipTypes.map(m => <li>{m}</li>)} </p>
          
          <p>{price.prices.map( p=> <p className='font-bold'>${p}<span className='text-sm font-thin'>/mon</span></p>)}</p>
  
         </div>
         <div>
         <p className='text-lg font-bold text-blue text-center underline'> Features: </p>
            {price.amenities.map((a , idx) => <Features feature={a} key={idx}></Features>
            
            )} 
             <button className='w-full bg-blue-700 py-2 rounder-md text-white mt-auto hover:bg-blue-300'>Buy Now</button>
          
         </div>
          
         
           
           
            
        </div>
    );
};

export default PriceCart;