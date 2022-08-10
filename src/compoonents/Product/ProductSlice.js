import React from 'react'
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axiosHelper from '../../api/axiosHelper';


const ProductsSlice = createSlice({
  name: 'product',
  initialState: {
    status: 'idle',
    products:[]
  
  },
  reducers: {
    getAllProducts: (state, action) => {
    },
    addtoProducts : (state,action) => {
      state.products.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder 
     .addCase(getProduct.pending , (state,action)=>
     {
      state.status = 'loading';
     })
     .addCase(getProduct.fulfilled ,(state,action)=>{
      state.status = 'done';
      state.products = action.payload.data;
     })
  }
})

//action (object) và action creators () => return action)(objgetAllProduct ở trên 
// thunk action (function) và thunk action creator ()=> {return: thunk action }
export default ProductsSlice


//*thunk action creator ------------------------------------------------------------------------------------------ 
export const getProduct = createAsyncThunk('product/getProducts/',async ()=> {
  const res = await axiosHelper.get('products')
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
