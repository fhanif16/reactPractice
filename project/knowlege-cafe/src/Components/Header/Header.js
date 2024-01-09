import React from 'react';
import './Header.css'
import img from '../../profile.png'




const Header = () => {
    return (
        <div className='header-style'>
           
           
            <h1>Knowledge Cafe</h1>
            <img src={img}alt="" srcset="" />
            
        </div>
    );
};

export default Header;