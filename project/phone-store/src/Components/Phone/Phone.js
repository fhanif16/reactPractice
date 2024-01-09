import React from 'react';
import './Phone.css'
import { addDataToLocal, deleteAll, removeItem } from '../../Utilities/fakedb';

const Phone = (props) => {
    const {phone_name, slug, image , brand} = props.phone;

    const addToCart= (slug) => {
      addDataToLocal(slug);
    }

    const removeFromCart =(slug) => {
       removeItem(slug)
    }

    const removeAll =() => {
        deleteAll(slug)
    }
    return (
        
        <div className='phoneStyle'>
            
            <img src={image} alt="" srcset="" />
            <h1>{phone_name}</h1>
            <button onClick={() => addToCart(slug)}>Add</button>
            <button onClick={()=> removeFromCart(slug)}>Remove</button>
            <button onClick={()=> removeAll(slug)}>Remove All</button>
            
        </div>
    );
};



export default Phone;