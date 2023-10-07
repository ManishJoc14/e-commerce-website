import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartFeatures"

export default configureStore({
    reducer: {
       cartItems : cartReducer,   
    }
})