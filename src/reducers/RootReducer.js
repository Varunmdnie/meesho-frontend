import { combineReducers } from "redux";
import CurrentProductReducer from "./CurrentProductReducer";



let RootReducer = combineReducers({
    currentProduct:CurrentProductReducer
   
})

export default RootReducer