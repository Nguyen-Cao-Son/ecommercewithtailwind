import React from 'react'
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axiosHelper from '../../api/axiosHelper';

//  const  GetUserCart = () => {
//   const data = useGetAllProducts('carts')
//   const userCart =data.find((value)=>
//   value.id===1 )
//   return userCart
// }

const ProductsSlice = createSlice({
  name: 'cart',
  initialState: {
    status: 'idle',
    cart:[]
  
  },
  reducers: {
    getAllProducts: (state, action) => {
      if (state.cart.productId === action.payload) {
        state.cart.quantity = (state.cart.quantity) * 1 + 1;
      }
      else {
        state.cart.quantity = 1;
      }
      state.cart.productId = action.payload
      console.log('quantity',state.cart.quantity)
    }
  },
  extraReducers: (builder) => {
    builder 
     .addCase(getProduct.pending , (state,action)=>
     {
      state.status = 'loading';
     })
     .addCase(getProduct.fulfilled ,(state,action)=>{
      state.status = 'idle';
      state.cart = action.payload;
     })
  }
})

//action (object) và action creators () => return action)(objgetAllProduct ở trên 
// thunk action (function) và thunk action creator ()=> {return: thunk action }
export default ProductsSlice


//*thunk action creator ------------------------------------------------------------------------------------------ 
export const getProduct = createAsyncThunk('cart/getCarts/',async ()=> {
  const res = await axiosHelper.get('carts')
   return res 
})
//thunk redux 
export function addtoCart(getall) { // thunk action creator 
  return function addToCartThunk(dispatch, getState) {
    console.log('state',getState())
    console.log(getall)
    dispatch(ProductsSlice.actions.getAllProducts(getall.id))
    console.log('state after get ',getState())  
  } //thunk action
}
