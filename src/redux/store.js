import { configureStore } from "@reduxjs/toolkit";
import  CartSlice  from "../compoonents/Cart/CartSlice";
import ProductsSlice from "..//compoonents/Product/ProductSlice"

const store = configureStore({
    reducer: {   
       cart: CartSlice.reducer,
       products:ProductsSlice.reducer
    }
})

export default store