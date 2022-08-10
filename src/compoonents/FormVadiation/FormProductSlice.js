import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosHelper from '../../api/axiosHelper';
import ProductsSlice from '../Product/ProductSlice';
import { useDispatch } from 'react-redux';

const FormProductsSlice = createSlice({
    name: 'FormProductsSlice',
    initialState: {
        status: 'idle',
        FormProduct: []
        
    },
    reducers: {
        addProductForSale: (state, action) => {
            state.FormProduct = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProduct.pending, (state, action) => {
            state.status = 'loading';
        })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.status = 'done';
                state.products = action.payload.data;
            })
        }
    })
    // const dispatch = useDispatch()
//action (object) và action creators () => return action)(objgetAllProduct ở trên 

// thunk action (function) và thunk action creator ()=> {return: thunk action }
export default FormProductsSlice


//*thunk action creator ------------------------------------------------------------------------------------------ 
export const getProduct = createAsyncThunk('product/getProducts/', async () => {
    const res = await axiosHelper.get('products')
    return res
})
//thunk redux 
export function addtoFormProducts(getall) { // thunk action creator 
    return function addFormProductsThunk(dispatch, getState) {
    dispatch(ProductsSlice.actions.addtoProducts(getall))
    dispatch(FormProductsSlice.actions.addProductForSale(getall))
    } //thunk action
}
