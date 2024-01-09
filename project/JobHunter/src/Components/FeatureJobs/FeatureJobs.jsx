import React, { useEffect, useState } from 'react';
import "./FeatureJobs.css"
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeatureJobs = () => {
    const [jobs , setJobs] = useState([]);
    const getJobs =() => {
        fetch ('jobs.json')
        .then(res => res.json())
        .then (data => setJobs(data))

    } 

    useEffect(()=> {
       getJobs()
       

    } , [])


 
   const handleClick = (job) => {
   console.log("job added" , job)
 
   
   }
  

   
   
   
    return (
        <div className='featuredJobs-styles'>
           <h3>Featured Jobs</h3>
           <p>Lorem ipsum dolor sit amet consectetur esse!</p>
          <div className='featuredJobs'>
            { 
                jobs.map(jobData => <FeaturedJob 
                    key={jobData.jobId}
                jobData={jobData}
                getJobs ={getJobs}
               handleClick ={handleClick}></FeaturedJob>)
            } 
          </div>
          <button className='btn-style'>See More</button>

        </div>
    );
};

export default FeatureJobs;
