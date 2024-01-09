import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';
import './Phones.css'

const Phones = () => {
    const [phones , setPhones] =useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data => 
            setPhones(data.data)
            
        
        )
        

    }, [])
    return (
        
        <div className='phonesStyle'>
            
          
           {
                phones.map(phone => (
                    <Phone key={phone.slug} phone={phone}></Phone>
                   
                    
                   
                    
                ))
                
            }

           
          
           <div>
                <h4>Order Summary</h4>
            </div>
          
          
        </div>
      
    );
};

export default Phones;