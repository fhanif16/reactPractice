import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Person from './components/Person/Person';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
   
    <Countries></Countries>
    <Footer></Footer>
      
    </div>
  );
}





/* function LoadCountries (){
   const [countries , setCountries] = useState([]);
  useEffect( () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))

  }, [])
  return(
    <div>
      <h1>Avaiable Countries : {countries.length}</h1>
      {
     countries.map(country => 
     <Country name={country.name.common} official={country.name.official} image={country.flags.png}></Country>
     )
        }
    </div>
  )
}

function Country(props){
  return(
    <div className="div">
     <h1> Name:{props.name}</h1>
     <p> Official Name: {props.official}</p>
     <img src={props.image} alt="" />
    </div>
  )
}

 */
export default App;