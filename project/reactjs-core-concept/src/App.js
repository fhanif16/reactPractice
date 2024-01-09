import logo from './logo.svg';
import './App.css';

const num = 555;
const style = {
  color: 'blue'
}

function App() {
  const array =["Bapparaz" , "Riaz" , "Ferdous" , "Manna"];
  
  return (

   
    <div className="App">

<div className="App">
     
     {
      array.map(nayok => <li>{nayok}</li>)
    }
    {
      array.map(nayok => <Person name={nayok}></Person>)
    }
   
    </div>
      
      <Friend name ="tamim Iqbal" profession =" crickter"></Friend>
    
   
    </div>
  );
}


function Person(props){
  console.log(props)
  return (
    <div className ="person">
      <h1>{props.nayok}</h1>
      <h1>{props.name} </h1>
  
    </div>
  )
  
}


function Friend (props){
  return ( 
    <div className ="person">
      <h1>{props.name}</h1>
      <p>{props.profession}</p>
    </div>
    
  )

}

export default App;
