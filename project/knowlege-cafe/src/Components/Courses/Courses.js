import React, { useEffect, useState } from 'react';
import './Courses.css'
import Course from '../Course/Course';

const Courses = () => {
    const [courses , setCourses] = useState([])
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    const[minute , setMin] =useState(0);
    useEffect(()=>{
        console.log(minute)
       
    } ,[minute])
    const addMin =(min)=>{
       
        const newMin = min + minute ;
        
      setMin(newMin)
        
    
    }
let arr =[];
  const [cart , setcart] = useState([]);
  const handleClick = (title) => {
   arr =[...cart , title];
    setcart(arr);

  }

  
    return (

        <div className='courses-style'>
            <div>
               {
                courses.map(course => <Course course={course} minFun={addMin} addName ={handleClick}></Course>)
               }

            </div>
            {/* <div>
                <h1>left side</h1>
                <p> total minute :{minute}</p>
                <p className='para'>Name: {cart} </p>

            </div> */}
            <div>
    <h1>left side</h1>
    <p>Total minute: {minute}</p>
    <div className='para'>
        {cart.map((name) => (
            <p >{name}</p>
        ))}
    </div>
</div>
        </div>
    );
};

export default Courses;