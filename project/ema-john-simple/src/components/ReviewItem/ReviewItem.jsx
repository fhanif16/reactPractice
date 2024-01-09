import React from 'react';
import './ReviewItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart ,faTrashAlt} from '@fortawesome/free-solid-svg-icons'


const ReviewItem = ({product, handleRemovedFromCart}) => {
    const {id, img,price ,name, quantity} = product;
    return (
        <div className='review-item'>
           <img src={img} alt="" srcset="" />
           <div className='review-details'>
            <p className='product-title'>{name}</p>
            <p>Price: <span className='orange-text'> $ {price}</span></p>
            <p>Order quantity: <span className='orange-text'> {quantity}</span></p>

           </div>

          
            <button onClick={() => handleRemovedFromCart(id)}className='btn-delete'>  
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
          

            
        </div>
    );
};

export default ReviewItem;