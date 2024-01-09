import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 
  return (
   
    <div className="App">
   
   <Counter></Counter>
   <ExternalUser></ExternalUser>
      
    </div>
  );
}

//  const products =[{name:'laptop' , price:34000},
//   {name:'phone' , price:75000},
// {name:'watch' , price:3500}]
//   { products.map( product => <Product name={product.name} price={product.price}>
      
//      </Product>)}

function Product (props){
  return(
    <div className="product">
      <h1>Name:{props.name}</h1>
      <p>Price:{props.price}</p>
    </div>
  )
}


function Counter() {
  const [count , setCount] = useState(5)
  const increaseCount =() => {
    const newCount = count +1;
    setCount(newCount)
  }

  const decrease =() => {
    if (count > 0){
       setCount(count -1)

    }
    else setCount(0)
   
  }
  
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}


function ExternalUser () {
  const [users , setUsers] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>External User:{users.length}</h2>
      <p>{
        users.map(user => <User name ={user.name} userName={user.username} 
        userEmail ={user.email}></User>
       
         )
}</p>
    </div>
  )

}

function User(props) {
  return (
    <div className='user'>
      <h1>Name : {props.name}</h1>
      <p>User Name : {props.userName}</p>
      <p>Email: {props.userEmail}</p>

    </div>
  )
}
export default App;
