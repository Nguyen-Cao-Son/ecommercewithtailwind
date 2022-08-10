import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import useGetAllProducts from '../../api/hook/useGetProduct';
import axiosHelper from '../../api/axiosHelper';



//  const  GetUserCart = () => {
//   const data = useGetAllProducts('carts')
//   const userCart =data.find((value)=>
//   value.id===1 )
//   return userCart
// }

const CartSlice = createSlice({
  name: 'carts',
  initialState: {
    status: 'idle',
    carts: {
    }
  },

  reducers: {
    addToCart: (state, action) => {
      const itemindex = state?.carts?.products.findIndex(item =>
        item?.productId === action.payload)
      console.log('item index', itemindex);
      if (itemindex >= 0) {
        state.carts.products[itemindex].quantity += 1
        console.log(state.carts.products[itemindex]);
      }
      // const tempProduct = {...action.payload,quantity :1 }
    },

    removeToCart: (state, action) => {
      const itemindex = state?.carts?.products.findIndex(item =>
        item?.productId === action.payload)
      console.log('item index', itemindex);
      if (itemindex >= 0) {
        if (state.carts.products[itemindex].quantity === 0) {
          state.carts.products[itemindex] = {}
        }
        else {
          state.carts.products[itemindex].quantity -= 1
        }
        console.log(state.carts.products[itemindex]);
      }
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCartsFromApi.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getCartsFromApi.fulfilled, (state, action) => {
        state.status = 'done';
        state.carts = action.payload.data;
      })
  }
})

//action (object) và action creators () => return action)(object) vd addToCart ở trên 
// thunk action (function) và thunk action creator ()=> {return: thunk action }
export default CartSlice

//*thunk action creator ------------------------------------------------------------------------------------------ 
export const getCartsFromApi = createAsyncThunk('carts/getCarts/', async () => {
  const res = await axiosHelper.get('carts/1')
  console.log('getcarts', res)
  return res
})
//thunk redux 
export function addtoCart(addto) { // thunk action creator 
  return function addToCartThunk(dispatch, getState) {
    console.log('state', getState())
    console.log('value', addto)
    dispatch(CartSlice.actions.addToCart(addto))
    console.log('state after get ', getState())
  } //thunk action
}

export function removeToCart(addto) { // thunk action creator 
  return function removeToCartThunk(dispatch, getState) {
  
    dispatch(CartSlice.actions.removeToCart(addto))

  } //thunk action
}

