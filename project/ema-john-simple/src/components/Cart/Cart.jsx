import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart ,faTrashAlt} from '@fortawesome/free-solid-svg-icons'


const Cart = ({cart , handleClearCart , children}) => {
    //const cart = props.cart;
   // console.log(cart)
    let total =0;
    let totalShipping = 0;
    let quantity =0;
 

    for (const product of cart){
      /*  if(product.quantity === 0){
            product.quantity = 1;
        } */ 
       // product.quantity = product.quantity || 1;
        
        totalShipping = totalShipping + product.shipping;
       quantity = quantity + product.quantity;
       total = total + (product.price) * quantity
       
       

    }
    const tax = (7 * total) /100;
    const grandTotal = total + totalShipping + tax;
   
    return (
        <div className='cart'>
            <h4>Order Summary </h4>
                <p>Selected Item :{quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping:${totalShipping} </p>
                <p>Total Tax: ${tax.toFixed(2)}</p>
                <p> Total Price: ${grandTotal.toFixed(2)}</p>
                <button onClick={handleClearCart} className='btn-clear-cart'> 
                <span>Clear Cart </span>
                     <FontAwesomeIcon  icon={faTrashAlt}></FontAwesomeIcon></button>
                     {children}

                     

            
        </div>
    );
};

export default Cart;