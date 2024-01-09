import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <Link to="/phones">Phones</Link>
        </div>
    );
};

export default Header;