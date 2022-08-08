import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtoCart, removeToCart } from './CartSlice'
import { useSelector } from 'react-redux'
import { ProductFindIndex } from './ProductFind'


const CartView = ({ data }) => {
    const productData = data?.[0]
    const dispatch = useDispatch()
    const handleClickPlus = (e) => {
        e.preventDefault()
        dispatch(addtoCart(
            productData.id
        ))
    }
    const handleClickRemove = (e) => {
        e.preventDefault()
        dispatch(removeToCart(
            productData.id
        ))
    }

    return (

        <div className='mx-[100px] w-[280px] translate-y-[15%]'>
            <div className='rounded-lg border-solid border-4 border-stone-400 '>
                <div className='flex flex-col justify-items-center items-center min-h-[300px] '>
                    <h3>{productData?.title}</h3>
                    <div className='w-[150px] h-auto'>
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
                            <button className='text-3xl' onClick={handleClickRemove}>-</button>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartView