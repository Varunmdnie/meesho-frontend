import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/CartActions";


const initialState = JSON.parse(localStorage.getItem("cart")) || {
  cartItems: [],
  cartCounter: 0,
  totalPrice: 0,
  deliveryCharges: 50,
  grandTotal: 0
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

      let updatedCartItems;
      let updatedTotalPrice;

      if (existingItemIndex !== -1) {

        updatedCartItems = state.cartItems.map((item, index) => {
          if (index === existingItemIndex) {
            const updatedQuantity = item.quantity + 1;
            return { ...item, quantity: updatedQuantity, total_item_price: updatedQuantity * item.price };
          }
          return item;
        });
        updatedTotalPrice = state.totalPrice + action.payload.price;
      } else {

        updatedCartItems = [...state.cartItems, { ...action.payload, quantity: 1, total_item_price: action.payload.price}];
        updatedTotalPrice = state.totalPrice + action.payload.price;
      }

      const updatedGrandTotal = updatedTotalPrice + state.deliveryCharges;


      const updatedState = {
        ...state,
        cartItems: updatedCartItems,
        cartCounter: state.cartCounter + 1,
        totalPrice: updatedTotalPrice,
        grandTotal: updatedGrandTotal,
      };
      // console.warn(updatedState)
      localStorage.setItem("cart", JSON.stringify(updatedState));

      return updatedState;
    }

    case REMOVE_FROM_CART: {
      const removedItem = state.cartItems.find(item => item.id === action.payload);
      if (!removedItem) return state;


      const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload);


      const updatedTotalPrice = state.totalPrice - (removedItem.price * removedItem.quantity);
      const updatedGrandTotal = updatedTotalPrice + state.deliveryCharges;


      const updatedState = {
        ...state,
        cartItems: updatedCartItems,
        cartCounter: state.cartCounter - removedItem.quantity,
        totalPrice: updatedTotalPrice,
        grandTotal: updatedGrandTotal
      };

      localStorage.setItem("cart", JSON.stringify(updatedState));

      return updatedState;
    }


    case 'INCREMENT_QUANTITY': {
      const updatedCartItems = state.cartItems.map(item => {
        if (item.id === action.payload) {
          const updatedQuantity = item.quantity + 1;
          return { ...item, quantity: updatedQuantity, total_item_price: updatedQuantity * item.price };
        }
        return item;
      });

      const updatedTotalPrice = state.totalPrice + state.cartItems.find(item => item.id === action.payload).price;
      const updatedGrandTotal = updatedTotalPrice + state.deliveryCharges;

      const updatedState = {
        ...state,
        cartItems: updatedCartItems,
        cartCounter: state.cartCounter + 1,
        totalPrice: updatedTotalPrice,
        grandTotal: updatedGrandTotal,
      };

      localStorage.setItem("cart", JSON.stringify(updatedState));

      return updatedState
    }

    case 'DECREMENT_QUANTITY': {
      const updatedCartItems = state.cartItems.map(item => {
        if (item.id === action.payload && item.quantity > 1) {
          const updatedQuantity = item.quantity - 1;
          return { ...item, quantity: updatedQuantity, total_item_price: updatedQuantity * item.price };
        }
        return item;
      });

      const removedItem = state.cartItems.find(item => item.id === action.payload);
      if (removedItem.quantity === 1) return state; // Prevent quantity from going below 1

      const updatedTotalPrice = state.totalPrice - removedItem.price;
      const updatedGrandTotal = updatedTotalPrice + state.deliveryCharges;

      const updatedState = {
        ...state,
        cartItems: updatedCartItems,
        cartCounter: state.cartCounter - 1,
        totalPrice: updatedTotalPrice,
        grandTotal: updatedGrandTotal,
      };
      localStorage.setItem("cart", JSON.stringify(updatedState));

      return updatedState
    }

    default:
      return state;
  }
};

export default CartReducer;

