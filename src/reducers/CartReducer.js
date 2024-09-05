
const initialState = {
    cartItems: [],
    cartCounter: 0,
    totalPrice: 0,
    deliveryCharges: 50,
    taxes: 0,
    grandTotal: 0
  };
  
  const CartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART': {
        const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
        let updatedCartItems;
        let updatedTotalPrice;
  
        if (existingItemIndex !== -1) {
          // Update existing item
          updatedCartItems = state.cartItems.map((item, index) => {
            if (index === existingItemIndex) {
              const updatedQuantity = item.quantity + 1;
              return { ...item, quantity: updatedQuantity, total_item_price: updatedQuantity * item.price };
            }
            return item;
          });
          updatedTotalPrice = state.totalPrice + action.payload.price;
        } else {
          // Add new item
          updatedCartItems = [...state.cartItems, { ...action.payload, quantity: 1, total_item_price: action.payload.price }];
          updatedTotalPrice = state.totalPrice + action.payload.price;
        }
  
        const updatedTaxes = updatedTotalPrice * 0.18;
        const updatedGrandTotal = updatedTotalPrice + updatedTaxes + state.deliveryCharges;
  
        return {
          ...state,
          cartItems: updatedCartItems,
          cartCounter: state.cartCounter + 1,
          totalPrice: updatedTotalPrice,
          taxes: updatedTaxes,
          grandTotal: updatedGrandTotal
        };
      }
  
      case 'REMOVE_FROM_CART': {
        const removedItem = state.cartItems.find(item => item.id === action.payload.id);
        if (!removedItem) return state;  // In case the item is not found
  
        const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        const updatedTotalPrice = state.totalPrice - (removedItem.price * removedItem.quantity);
        const updatedTaxes = updatedTotalPrice * 0.18;
        const updatedGrandTotal = updatedTotalPrice + updatedTaxes + state.deliveryCharges;
  
        return {
          ...state,
          cartItems: updatedCartItems,
          cartCounter: state.cartCounter - removedItem.quantity,
          totalPrice: updatedTotalPrice,
          taxes: updatedTaxes,
          grandTotal: updatedGrandTotal
        };
      }
  
      default:
        return state;
    }
  };
  

export default CartReducer
