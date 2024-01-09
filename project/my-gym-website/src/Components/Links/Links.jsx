import React, { useState } from 'react';
import { Bars4Icon } from '@heroicons/react/24/solid'



const Links = () => {
  const [isOpen , setOpen] = useState(false);


    return (
       
        <div className='grid'>
             <Bars4Icon className="h-6 w-6 text-blue-500" onClick={()=> setOpen(!isOpen)}/>
            <span>
            {isOpen === true ?  <div className='grid bg-white border-2 p-3 '>
                <a href="http://">Home</a>
              <a href="http://">Contact</a>
              <a href="http://">Contact</a>
              <a href="http://">Contact</a>
              <a href="http://">Contact</a>
              </div> :'' }

            </span>
        </div>

    );
};

export default Links;