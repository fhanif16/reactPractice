import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {

    const {user , logOut} = useContext(AuthContext);
    console.log(user)

    const handelLogOut = () => {
        logOut()
        .then(result => {
        
        })
        .catch(error => console.log(error))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" srcset="" />
         <div>
         <Link  to='/'>Shop</Link>
          <Link to='/orders'>Orders</Link >
          <Link to ='/inventory'>Inventory</Link>
          <Link to= '/login'>LogIn</Link>
          <Link to ='/signUp'>SignUp</Link>
          
          {user && <span className='text-white'> Weclome {user.email}
          <button onClick={handelLogOut}>Log Out </button> </span>}
         </div>
         
        </nav>
    );
};

export default Header;