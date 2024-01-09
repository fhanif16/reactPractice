import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  
  return (
    <div className="App">
      <District name={'Argentina'} speciality ={'Football'}></District>
      <District name={'Bangladesh'} speciality ={'Cricket'}></District>
      <District name={'USA'} speciality ={'BasketBall'}></District>
      <LoadData></LoadData>
      
    </div>
  );
}

function District (props){
  const [power , setPower] = useState(1);
 
  const inreasedPower = () =>{
  const newPower = power * 2;
  setPower(newPower)
 }
  return(
    <div className='country'>
      <h1>Name:{props.name}</h1>
      <p>Speciality:{props.speciality}</p>
      <h1> power: {power}</h1>
      <button onClick={inreasedPower}>Increased </button>
    </div>
  )

}

function LoadData (){
const [comments , setComment] = useState([]);
useEffect( ()=> {

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then( data => setComment(data))
},[])

  return (
   
    <div >
      <h1> Comments Count : {comments.length}</h1>
      <div className='App'>
      {comments.map(comment =>
      <DisplayUser users={comment} key ={comment.id}></DisplayUser>
        )}
      </div>
    </div>
  )
}

function DisplayUser(props){
  return(
    <div className='users'>
      <h5> Name:{props.users.name}</h5>
      <p> UserName :{props.users.username}</p>
    </div>
  )
}



export default App;
