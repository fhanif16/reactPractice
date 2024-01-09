import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
   console.log(props)
   const {img, name, seller, quantity, price,ratings , id} = props.product;
const handleAddToCart = props.handleAddToCart;
   
    return (
        <div className='product'>
            
            <img src={img} alt="" srcset="" />
           <div className='product-info'>
           <h4 className='product-name'>{name}</h4>
            <h6>price:${price}</h6>
            <p>Manufacture:{seller}</p>
            <p>Rating:{ratings} start</p>
            

           </div>
         <button onClick={()=> handleAddToCart(props.product)}  className='btn-cart' >Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
         </button> 

           
            
        </div>
    );
};

export default Product;