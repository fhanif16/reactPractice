import React from 'react';
import { Link, Outlet, useNavigate, useNavigation } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const navigation = useNavigation();
   

    return (
        <div>
             <div>{navigation.state ==="loading" ? "loading" : " "}</div>
            <ActiveLink to="/home">Home</ActiveLink >
            <ActiveLink to="/contact">Contact</ActiveLink >
           
            <ActiveLink to ="/user">User</ActiveLink >
          
            
            
            <Outlet></Outlet>
        </div>
    );
};

export default Header;