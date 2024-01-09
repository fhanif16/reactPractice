import React from 'react';
import './Active.css'
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to , children}) => {
    return (
        <NavLink
        to={to}
        className={({isActive, isPending }) =>
          isActive ? "active": ""
        }
      >
        {children}
      </NavLink>
        
    );
};

export default ActiveLink;