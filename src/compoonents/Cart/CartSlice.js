import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import useGetAllProducts from '../../api/hook/useGetProduct';
import axiosHelper from '../../api/axiosHelper';
import { Result } from 'postcss';


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
      //  state.carts = action.payload
      const productId = action.payload.id
      console.log('productId', productId)
      const product = () => {
        const value = state
        return value
      }
      console.log(state?.cart?.carts)
      console.log(product())

    },
    removeToCart: (state, action) => {
      if (state.carts.productId === action.payload) {
        if (state.carts.quantity > 0) {
          state.carts.quantity = (state.carts.quantity) * 1 - 1;
        }
        else {
        }
      }
      else {
        state.carts.quantity = 1;
      }
      state.carts.productId = action.payload
      console.log('quantity', state.carts.quantity)
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
    console.log('state', getState())
    // console.log(addto)
    dispatch(CartSlice.actions.removeToCart(addto.id))
    // console.log('state after get ',getState())  
  } //thunk action
}

