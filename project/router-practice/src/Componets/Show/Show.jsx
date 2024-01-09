import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Show = () => {
    const loadUsers = useLoaderData();
    console.log(loadUsers.address)
    return (
       

        <div>
           <p>Street: {loadUsers.address.street}</p>
           <p>Suite: {loadUsers.address.suite}</p>
           <p>City:{loadUsers.address.city}</p>
        </div>
    );
};

export default Show;