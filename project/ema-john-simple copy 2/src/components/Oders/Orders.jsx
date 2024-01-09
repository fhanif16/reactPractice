import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Orders.css"
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCreditCard} from '@fortawesome/free-solid-svg-icons'
const Orders = () => {
    const savedCart= useLoaderData();
    console.log(savedCart);
    const [cart , setCart] = useState(savedCart);
    const handleRemovedFromCart = (id)=> {
      console.log(id)
      const remaining = cart.filter(product => product.id !== id);
      setCart(remaining)
      removeFromDb(id);
    }

    const handleClearCart = () =>{
      setCart([]);
      deleteShoppingCart();
    }
    

    return (
        <div className='shop-container'>
          <div className='review-container'>
            {
              cart.map(product => <ReviewItem
              key ={product.id}
              product={product}
              handleRemovedFromCart ={handleRemovedFromCart}></ReviewItem>)
            }
          </div>
          <div>
           <Cart cart={cart}
          handleClearCart ={handleClearCart} >

<Link className='procced-link' to="/checkout"> 
           <button className='btn-procced'>Procced Checkout <FontAwesomeIcon icon={faCreditCard} />
           </button></Link>
          </Cart>
          </div>
        </div>
    );
};

export default Orders;