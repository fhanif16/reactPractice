import React from 'react';
import './Cosmetic.css'
import { addToDb, deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';



const Cosmetic = (props) => {
//    const {name}=props.products;
const {name , price, id} = props.products;

const addToCard = (id) => {
    //console.log("item Added" , id)
  //  localStorage.setItem(id , 1)
  addToDb(id);

}

const removeFromCart = (id) => {
   removeFromDb(id);
}

const deleteAll = (id) => {
    deleteShoppingCart(id);
}

const addToCartWithParam = () => addToCard(id) 


    return (
        <div className='products'>
           <h1>Name:{name}</h1>
           <h2> Only for : ${price}</h2>
           <button onClick={addToCartWithParam }>Add to cart</button>
           <button onClick={() => addToCard(id)}> add items with id</button>
           <button onClick={() => removeFromCart(id)} >Remove</button>
           <button onClick={()=> deleteAll(id)}>Delete All</button>
        </div>
    );
};

export default Cosmetic;