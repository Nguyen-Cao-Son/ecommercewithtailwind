import React from 'react'
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import useGetAllProducts from '../../api/hook/useGetProduct';
import axiosHelper from '../../api/axiosHelper';


//  const  GetUserCart = () => {
//   const data = useGetAllProducts('carts')
//   const userCart =data.find((value)=>
//   value.id===1 )
//   return userCart
// }

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    status: 'idle',
    cart:{
      id: '',
      userId:'',
      date:'',
      products:[]
    }
  
  },
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.productId === action.payload) {
        state.cart.quantity = (state.cart.quantity) *1+1;
      }
      else {
        state.cart.quantity = 1;
      }
      state.cart.productId = action.payload
      console.log('quantity',state.cart.quantity)
    },
    removeToCart:(state,action)=>{
      if (state.cart.productId === action.payload) {
        if(state.cart.quantity>0){
          state.cart.quantity = (state.cart.quantity) * 1 - 1;
        }
        else{
          //gở khỏi cart 
        }
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
     .addCase(getCarts.pending , (state,action)=>
     {
      state.status = 'loading';
     })
     .addCase(getCarts.fulfilled ,(state,action)=>{
      state.status = 'idle';
      state.cart = action.payload.data;
      console.log(state.cart)  
     })
  }
})

//action (object) và action creators () => return action)(object) vd addToCart ở trên 
// thunk action (function) và thunk action creator ()=> {return: thunk action }
export default CartSlice 


//*thunk action creator ------------------------------------------------------------------------------------------ 
export const getCarts = createAsyncThunk('cart/getCarts/',async ()=> {
  const res = await axiosHelper.get('carts/1')
  console.log(res)
   return res 
})
//thunk redux 
export function addtoCart(addto) { // thunk action creator 
  return function addToCartThunk(dispatch, getState) {
    console.log('state',getState())
    console.log(addto)
    dispatch(CartSlice.actions.addToCart(addto.id))
    console.log('state after get ',getState())  
  } //thunk action
}

export function removeToCart(addto) { // thunk action creator 
  return function removeToCartThunk(dispatch, getState) {
    console.log('state',getState())
    console.log(addto)
    dispatch(CartSlice.actions.removeToCart(addto.id))
    console.log('state after get ',getState())  
  } //thunk action
}

