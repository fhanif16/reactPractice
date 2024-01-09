import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div class="nav"> 
             <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>


        </div>
    );
};

export default Nav;