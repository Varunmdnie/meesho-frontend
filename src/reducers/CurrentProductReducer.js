
const storedProduct = localStorage.getItem('currentProduct');
let parsedProduct =null
if (storedProduct && storedProduct !== "undefined"){
  parsedProduct = storedProduct ? JSON.parse(storedProduct) : null;
}


const initialState = {
  product: parsedProduct
};




let  CurrentProductReducer = (state = initialState,action) =>{
    console.log(action);
    
    switch (action.type) {
        case 'SET_CURRENT_PRODUCT':
            localStorage.setItem('currentProduct', JSON.stringify(action.payload));
            return {
              ...state,
              product: action.payload,
            }
         
    
        default:
            return state
    }
   
}

export default CurrentProductReducer