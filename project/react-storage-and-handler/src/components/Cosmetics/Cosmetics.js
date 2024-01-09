import React, { useEffect, useState } from 'react';
//import add from '../../utilities/calculate';
import { add} from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {
/*const cosmetics = [
    { id:1 , name: 'Primar' , price: 100},
   { id:2 , name: 'Primar' , price: 100},
    {id:3, name: 'Blush' , price: 200},
  {id:4 , name: 'Highlighter' , price: 210}
] */

/*const cosmetics =[
    {
      "id": "65628b268b9c7bad3a9ce0df",
      "price": 241,
      "name": "Cherry Sharp"
    },
    {
      "id": "65628b26b5d6bc304a3c3859",
      "price": 268,
      "name": "Mavis Harris"
    },
    {
      "id": "65628b26b52b6150a77a21f3",
      "price": 373,
      "name": "Shanna Deleon"
    },
    {
      "id": "65628b26fdb28b999cf9c0d4",
      "price": 288,
      "name": "Aline Bolton"
    },
    {
      "id": "65628b26c8197f5781332c76",
      "price": 173,
      "name": "Weber Herrera"
    },
    {
      "id": "65628b26004396a7b2bbc5ef",
      "price": 387,
      "name": "Dianne Calderon"
    }
  ] */

/*const [products , setProducts] = useState([]);
useEffect( () => {
    
}, []) */

const [cosmetics , setCosmetics] = useState([]);
useEffect( ()=> {

    fetch ('data.json')
    .then(res => res.json())
    .then(data => setCosmetics(data))

}, [])
    return (
        <div>
            
           
            {/* {cosmetics.map( cosmetic => {
               <Cosmetic products ={cosmetic}></Cosmetic>

            })} */}
            {/* {
                cosmetics.map(cosmetic => <Cosmetic>
                    products ={cosmetic}
                </Cosmetic>)
            } */}
            {
    cosmetics.map(cosmetic => (
        <Cosmetic key={cosmetic.id} products={cosmetic} />
    ))
}


        </div>
    );
};

export default Cosmetics;