import React from 'react';
import './Nav.css'
import Links from '../Links/Links';



const Nav = () => {
    return (
        <div className='flex flex-row gap-10 ml-5 mr-10 justify-between bg-red-500 border-solid border-2 border-red-900 p-10'>
            <div>
               <h1><Links></Links></h1>

            </div>
           
            <div>
                <h1 className='text-5xl text-white'> Forever Gym</h1>
            </div>
            <div>
               <a href="http://" className='bg-green-500 border-2 p-2'>Join Us</a>
            </div>

          
        </div>
    );
};

export default Nav;