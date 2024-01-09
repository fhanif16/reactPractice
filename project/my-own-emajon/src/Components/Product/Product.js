import React from 'react';
import './product.css'

const Product = (props) => {
    const {img, name, seller, category, price, ratings, shippings , quantity ,id, ratingsCount} = props.product
    const  addItems = props.addItems;
    return (
        <div className='product-styles'> 
           <img src={img} alt="" srcset="" />
           <div>
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p>Seller: {seller}</p>
            <h5>Rating {ratings}</h5>
           </div>

           <button onClick={()=> {addItems(props.product)}}>Add Product</button>
        </div>
    );
};

export default Product;