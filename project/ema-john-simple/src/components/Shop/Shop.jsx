import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'


const Shop = () => {

    const [products , setProducts] = useState([]); 
    const [cart , setCart] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    } , []);

    useEffect( () => {
        console.log(products)
        const storedCart = getShoppingCart();
        const savedCart =[];
       // console.log(storedCart);
       //step1 get id
       for (const id in storedCart) {
        // get the product using id
      // console.log (id)
      const addedProduct = products.find(product => product.id === id)
      //console.log(addedProduct)
      // get quantity of the product
      if(addedProduct){
        const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      console.log(addedProduct);
      //step 4: addd the added prodcut to savedcart
      savedCart.push(addedProduct)

      }
   // save the cart
      setCart(savedCart)

      


       }



    },[products])
    const handleAddToCart = (product) => {
       // const newCart = [...cart, product] 
       let newCart =[];
        // if product does not exist in the cart set quantity as 1

const exists = cart.find(pd => pd.id === product.id);
if(!exists){
    product.quantity =1;
    newCart = [...cart , product]
}

else {
    exists.quantity = exists.quantity +1;
    const remaining = cart.filter(pd => pd.id !== product.id);
    newCart =[...remaining, exists]
}

        //if exist update the quamtity by 1
        setCart(newCart);
        addToDb(product.id)
       }


       const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
       }
    return (

        <div className='shop-container'>
            <div className='products-container'>
             {
                products.map(product => <Product key={product.id} 
                product ={product}
                handleAddToCart={handleAddToCart} >


                </Product> )
             }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}
               handleClearCart ={handleClearCart} >

           <Link className='procced-link' to="/orders"> 
           <button className='btn-procced'> Review Order <FontAwesomeIcon icon={faArrowAltCircleRight} />
           
           </button></Link>
               </Cart>
            </div>
            
        </div>
    );
};

export default Shop;