import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon , LockClosedIcon ,LockOpenIcon} from '@heroicons/react/24/solid'

const Nav = () => {

    const [open , setOpen] = useState(false)
    const routes = [
        {
          id: 1,
          name: 'Home',
          path: '/'
        },
        {
          id: 2,
          name: 'About',
          path: '/about'
        },
        {
          id: 3,
          name: 'Contact',
          path: '/contact'
        },
        {
          id: 4,
          name: 'Services',
          path: '/services'
        },
        {
          id: 5,
          name: 'Blog',
          path: '/blog'
        }
      ];
    return (
       <nav>
        <div onClick={() => setOpen(!open)} className='md:hidden'>
        <span>
            {open === true ? < LockClosedIcon className="h-6 w-6 text-blue-500" /> 
            :  < Bars3Icon className="h-6 w-6 text-blue-500" />}
            </span>
       
       
       
       
        </div>
       <ul className={`md:flex absolute md:static duration-500 bg-red-100 pl-8 pb-4 ${open ? 'top-6' : '-top-48'}`}>
       {
            routes.map(route => <Link
            key={route.id}
            route={route}></Link>)
        }
       </ul>

       </nav>
    );
};

export default Nav;