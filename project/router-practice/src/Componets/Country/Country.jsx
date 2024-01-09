import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
   // console.log({country});
    const {id} = country
    return (
        <div>
            <h1>{country.title}</h1>
            <h2>{country.body}</h2>
            <p><Link to={`/country/${id}`}>Show</Link></p>
           
          
        
        
        </div>
    );
};

export default Country;