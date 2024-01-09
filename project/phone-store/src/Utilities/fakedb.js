let shoppingCart ={};
const addDataToLocal = (slug) => {

    //localStorage.setItem(slug , 1);
    
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)



    }

    else{
        shoppingCart ={}

    }

   

    const quantity = shoppingCart[slug]
    if(quantity){
        const newQuantity = (quantity) + 1;
        shoppingCart[slug] = newQuantity;
      //  localStorage.setItem(slug , newQuantity)

    }

    else {
        //localStorage.setItem(slug , 1)
        shoppingCart[slug] =1;
    }

    localStorage.setItem('shopping-cart' , JSON.stringify(shoppingCart) )

}

const removeItem =(slug) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    else{
        shoppingCart ={};
    }

    const quantity =shoppingCart[slug];

    if(quantity){
        const newQuantity = quantity -1;
        shoppingCart[slug] = newQuantity
    }

    localStorage.setItem('shopping-cart' , JSON.stringify(shoppingCart) )
}


const deleteAll = (slug) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }

    else {
        shoppingCart ={};
    }

    const quantiy = shoppingCart[slug];
    if(quantiy){
        const newQuantity = localStorage.clear();
        shoppingCart[slug] = newQuantity;
    }
    else {
        shoppingCart ={};
    }

    localStorage.setItem('shopping-cart' , JSON.stringify(shoppingCart) )

}









export {addDataToLocal ,
    removeItem, deleteAll}