import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = ({handleClick}) => {
    

  
  
    return (
        <div>
            
            <h1>Job Details</h1>
            <p>{handleClick}</p>
          
            
           
        </div>
    );
};

export default ViewDetails;