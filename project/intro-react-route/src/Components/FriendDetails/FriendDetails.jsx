import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <h1>Everything about friend</h1>
            <h4>{friend.name}</h4>
            <p>phone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetails;