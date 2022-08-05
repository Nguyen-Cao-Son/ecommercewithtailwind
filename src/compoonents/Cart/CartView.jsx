import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtoCart } from './CartSlice'


const CartView = ({ data }) => {
    const productData = data?.[0]
    const dispatch = useDispatch()
    // console.log(productData);
    const handleClickPlus = () =>{
        dispatch(addtoCart(productData))
    }
    return (
        <div className='mx-[20px]'>
            <h3>{productData?.title}</h3>
            <div className='w-[100px] h-auto'>
                <img src={productData?.image} alt={productData?.title} />
            </div>
            <div>
                <span>
            <button
                 onClick={handleClickPlus}
                className='text-3xl'>+</button>
                </span>
            <span className='text-3xl'>{data?.quantity}</span>
            <span>
            <button className='text-3xl'>-</button>
            </span>
            </div>
        </div>
    )
}

export default CartView