import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart , setcart] = useState ([]);
    useEffect( () => {
        fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
    }, [])

    const addItems = (product) => {
       const newCart = [...cart , product];
       setcart(newCart);




    }

    

    return (
        <div className='shop-style'>
           <div className='product-style'>
           {
            products.map( product => <Product key={product.key}
            product ={product}
            addItems ={addItems}
           
            ></Product>)
           }
           </div>

            <div>
               <Cart product={cart}></Cart>
                
            </div>
            
        </div>
    );
};

export default Shop;