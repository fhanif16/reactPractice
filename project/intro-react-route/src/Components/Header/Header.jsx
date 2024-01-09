import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            {/* <Link  to ="/Friends">Frinds</Link> */}
            <ActiveLink to="/About">About</ActiveLink>
            <ActiveLink to="/Contact">Contact</ActiveLink>
            <ActiveLink to ="/Posts">Posts</ActiveLink>
            <ActiveLink to="/Friends">Frinds </ActiveLink>
        </nav>
    );
};

export default Header;