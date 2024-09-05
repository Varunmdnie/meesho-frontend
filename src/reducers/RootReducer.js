import { combineReducers } from "redux";
import CurrentProductReducer from "./CurrentProductReducer";
import CartReducer from "./CartReducer";



let RootReducer = combineReducers({
    currentProduct:CurrentProductReducer,
    cart:CartReducer
   
})

export default RootReducer