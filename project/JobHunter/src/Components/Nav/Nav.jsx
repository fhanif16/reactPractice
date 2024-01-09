import React from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import "./Nav.css"
import FeatureJobs from '../FeatureJobs/FeatureJobs';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav-style'>
            <Header></Header>
            {/* <Body></Body> */}
           <Outlet></Outlet>
            <Footer></Footer>

          
        </div>
    );
};

export default Nav;