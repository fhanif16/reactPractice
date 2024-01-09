import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetails = () => {
    const country = useLoaderData();
    console.log(country)
    return (
        <div>
            <h1>Helooooooooo country</h1>
            <h1>{country.id}</h1>
        
        
        
        </div>
    );
};

export default CountryDetails;