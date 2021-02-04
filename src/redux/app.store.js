import { createStore } from "redux";
import cartReducer from "./cart/cart.reducer";

let store = createStore(cartReducer);

export default store;
