import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Contact = () => {
    const data = useLoaderData();
    console.log(data)

    
    return (
        <div>
            <h1>{data.length}</h1>
            {
                data.map(country => <Country
                key={country.id}
                country={country}></Country>)
            }
            
        </div>
    );
};

export default Contact;