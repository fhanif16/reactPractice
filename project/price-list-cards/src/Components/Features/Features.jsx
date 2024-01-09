import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Features = ({feature , key}) => {


    return (
        <div className='flex gap-4 items-center'>
            <CheckCircleIcon className='h-6 w-6 text-blue-500'/>
            <span className='pl-2'>{feature}</span>
        </div>
    );
};

export default Features;