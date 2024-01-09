import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    console.log(friend.name)
    const {name , email , id , phone} = friend
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <p><Link to={`/Friend/${id}`}> show me details</Link></p>
        </div>
    );
};

export default Friend;