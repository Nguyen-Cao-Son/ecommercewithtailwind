import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "../compoonents/CartSlice";
const store = configureStore({
    reducer: {   
       cart: CartSlice.reducer,
       
    }
})

export default store