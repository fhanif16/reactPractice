import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.product;
    console.log(cart);
    let price =0;
    let shipping =0;
    let tax =0;
    let  grandTotal =0;
    for (const c of cart) {
      
       price = price + c.price;
       shipping = shipping + c.shipping;
       tax = (price * 8)/100;
       grandTotal =price + shipping + tax;
        
    }

    
    return (
        <div>
             <h1>order sumary</h1>
                <p>selected Item : {cart.length}</p>
                <p>price: ${price}</p>
                <p>Shipping:${shipping}</p>
                <p>Tax:{tax.toFixed(2)}</p>
                <p>Total price:${grandTotal}</p>
        </div>
    );
};

export default Cart;