import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1> Welcome to my page</h1>
            <nav>
              <a href="/Home">Home</a>
              <a href="/Manu">Manu</a>
              <a href="/Contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;