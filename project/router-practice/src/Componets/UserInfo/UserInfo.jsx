import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = ({user}) => {
  const{id} =user;

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
           <p><Link to={`/show/${id}`}>Show details</Link></p>
          
        </div>
    );
};

export default UserInfo;