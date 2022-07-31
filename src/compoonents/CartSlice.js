import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


//  const  GetUserCart = () => {
//   const data = useGetAllProducts('carts')
//   const userCart =data.find((value)=>
//   value.id===1 )
//   return userCart
// }

export const CartSlice =  createSlice({
name:'cart',
initialState :{
  productId : '',
  quantity: '' ,
},
reducers : {
addToCart :( state,action ) => {
    if(state.productId === action.payload){
     state.quantity =(state.quantity)*1 + 1;
    }
    else{
      state.quantity = 1;
    }
  state.productId = action.payload
 console.log(state.quantity)
}
}
}) 

