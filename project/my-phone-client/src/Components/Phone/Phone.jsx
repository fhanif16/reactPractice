import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();
    console.log(phone)
    return (
        <div>
            <h1>Hello {phone.name}</h1>
        </div>
    );
};

export default Phone;