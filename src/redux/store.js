import { configureStore } from "@reduxjs/toolkit";
import  CartSlice  from "../compoonents/Cart/CartSlice";
import ProductsSlice from "..//compoonents/Product/ProductSlice"
import FormProductsSlice from "../compoonents/FormVadiation/FormProductSlice";

const store = configureStore({
    reducer: {   
       cart: CartSlice.reducer,
       products:ProductsSlice.reducer,
       formProducts:FormProductsSlice.reducer
    }
})

export default store