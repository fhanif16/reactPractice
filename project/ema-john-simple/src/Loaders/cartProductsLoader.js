import {getShoppingCart} from "../utilities/fakedb";
const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    // if cart data is in database , u must used async

    const storedCart = getShoppingCart();
    const savedCart = [];
    console.log(storedCart)
    console.log(products);
    for (const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity =quantity;
            savedCart.push(addedProduct);

        }
    } 
    return savedCart;
    //if u need to send 2 things
   // return [products, savedCart];
   //return {products , savedCart};

}


export default cartProductsLoader;