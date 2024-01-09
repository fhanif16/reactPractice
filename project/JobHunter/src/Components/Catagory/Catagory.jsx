import React, { useEffect, useState } from 'react';
import JobList from '../JobList/JobList';
import "./Catagory.css"

const Catagory = () => {

    const [data , setData] = useState([]);

    const getData =() => {
        fetch ('jobsList.json')
        .then(res => res.json())
        .then (data => setData(data))

    }

    useEffect(()=> {
        getData()

    } , [])
    
    return (
        <div>
            <h1> Job Catagory List</h1>
            <p>Lorem, ipsum dolor sit amet quia doloribus molestiae, quibusdam optio?</p>
            <div className='jobLists'>
                {
                    data.map(d => <JobList key={d.id}
                    d={d}></JobList>)
                }
               
            </div>
        </div>
    );
};

export default Catagory;