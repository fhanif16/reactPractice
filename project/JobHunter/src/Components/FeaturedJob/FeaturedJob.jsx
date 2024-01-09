import React from 'react';
import  "./FeaturedJob.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faLocation , faDollar} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const FeaturedJob = ({jobData , handleClick}) => {
  
  
    
   const { jobId,jobDetails,jobLogo, experienceNeeded,qualification,salary, location,address,companyName , types} = jobData;

  

   
   
    return (
        <div className='featuredJob-style'>
           <img src={jobLogo} alt="" srcset="" />
           <h2>{jobDetails}</h2>
           <h4>{companyName}</h4>
           <button className='location-btn'>{location}</button> <button className='location-btn'>{types}</button>
           <h5><FontAwesomeIcon icon={faLocation} />{address} <span> <FontAwesomeIcon icon={faDollar} />Salary:{salary}</span></h5>
           <p><Link to ={`/featureJob/${jobId}`} className='btn-style'onClick={() => handleClick(jobData)} >View Details</Link></p>
        </div>
    );
};

export default FeaturedJob;