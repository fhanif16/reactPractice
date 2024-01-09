//use localstorage to manage data

const  addToDb = id =>{

    let shoppingCart = {};
   
    

   // const quantity = localStorage.getItem(id);

   // get the shopping cart 

   const storedCart = localStorage.getItem('shopping-card');
   if(storedCart){
   shoppingCart = JSON.parse(storedCart)

   }

  
   // add Quantity
   const quantity = shoppingCart[id];
    if(quantity ){
       const newQuantity = quantity + 1;
      // localStorage.setItem( id ,newQuantity)
      shoppingCart[id] = newQuantity;

    }
    else {
       shoppingCart[id] =1;
    }

    localStorage.setItem('shopping-card' , JSON.stringify(shoppingCart))

   

}

const removeFromDb = (id) => {
 const storedCart = localStorage.getItem('shopping-card');
 if(storedCart){
    const shoppingCart = JSON.parse(storedCart);
    if(id in shoppingCart){
        delete shoppingCart[id];
        localStorage.setItem('shopping-card' , JSON.stringify(shoppingCart))
         
    }

 }

 

}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-card')

}



export {addToDb , removeFromDb , deleteShoppingCart};