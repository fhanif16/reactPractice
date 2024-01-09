import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-style'>
           <img src='logo192.png'alt="" srcset="" />
           <nav className='nav-style'>
            <a href="/Home">Home</a>
            <a href="/Home">Order</a>
            <a href="/Home">Payment</a>
            <a href="/Home">Contact</a>

           </nav>
        </div>
    );
};

export default Header;