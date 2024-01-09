import React from 'react';
import "./JobList.css"

const JobList = ({d}) => {
    const {jobTitle ,availableJobs,jobPic} =d;
   
   
    
    return (
        <div className='jobList-styles'>
            <img src={jobPic} alt="" srcset="" />
            <h3>{jobTitle}</h3>
            <p>{availableJobs}</p>
            
        </div>
    );
};

export default JobList;