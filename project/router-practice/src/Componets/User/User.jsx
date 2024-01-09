import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';


const User = () => {
    const users = useLoaderData();
    console.log(users)
   
    return (
        <div>
           <h1>{users.length}</h1>
           {
            users.map(user => <UserInfo
            key ={user.id}
            user ={user}></UserInfo>)
           }
            
        </div>
    );
};

export default User;