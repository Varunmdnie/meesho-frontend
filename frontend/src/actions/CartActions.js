export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";




export let AddToCart = (item) =>({
    payload:item,
    type:"ADD_TO_CART"
})

export let RemoveFromCart = (id) => ({
    payload:id,
    type:"REMOVE_FROM_CART"
})




export const IncrementQuantity = (id) => {
    return {
      type: 'INCREMENT_QUANTITY',
      payload: id
    };
  };
  
  export const DecrementQuantity = (id) => {
    return {
      type: 'DECREMENT_QUANTITY',
      payload: id
    };
  };
  export const updateCartCount = (cartCount) => {
    return {
      type: 'UPDATE_CART_COUNT',
      payload: {cartCount}
    };
  };



