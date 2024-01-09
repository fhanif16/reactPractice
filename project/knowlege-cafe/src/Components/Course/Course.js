import React from 'react';
import './Course.css'
import img from '../../profile.png'


const Course = (props) => {
    const{name , date, image, title, type, min,id} = props.course
   // console.log(props.minFun)
   

    
   
  
   
    return (
        <div className='style'>
            <img src={image} alt="" srcset="" />
            <div  className='info-style'>
                <div className='nameStyle'>
                    <img src={img} alt="" srcset="" />
                    <div>
                    <h4>{name}</h4>
                    <p>{date}</p>
                    <h3>{title}</h3>
                   
            <p>{type}</p>
            <button onClick={()=> props.minFun(min)}>add</button>
            <button onClick={() => props.addName(title)}> AddName</button>
            
                   
                    </div>

                </div>
                <div>
                   <p>min requires: {min}</p>
                </div>

            </div>
           <div className='footerStyle'>
            
           </div>
            
        

            
        </div>
    );
};

export default Course;