import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h1>Name: {props.country.name.common}</h1>
           <img src={props.country.flags.png} alt="" srcset="" />
           <p>Population:{props.country.population}</p>
          
           
        </div>
    );
};

export default Country;