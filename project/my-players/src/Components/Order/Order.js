import React from 'react';

const Order = (props) => {
    const cart = props.playerInfo
    console.log(cart)
    let total =0;
    let name =[];
 
    for (const c of cart) {
     total = total + c.price;
    name.push("*" + c.name + " ") 
        
    }
    return (
        <div>
            <h1>Order Summary</h1>
            <p>Selected Item:{cart.length}</p>
            <p>Selected Player:{name}</p>
            <p>Total Price:{total}</p>

        </div>
    );
};

export default Order;