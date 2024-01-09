import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faHome } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header-style'>
            <div>
                <h1>Job Hunting Site</h1>
            </div>
            <div>
                 <Link to ="/home"> <FontAwesomeIcon icon={faHome} /> </Link>
                <Link to="/statistic"> Statistic</Link>
                <Link to="/applied"> Applied Job</Link>
                <Link to="/blog"> Blog</Link>
                <Link to="/featureJob"></Link>
               
               
                
            </div>

            <div>
                <button className='btn-style'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;