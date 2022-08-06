import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtoCart } from './CartSlice'
import { useSelector } from 'react-redux'
import { ProductFindIndex } from './ProductFind'

const CartView = ({ data }) => {
    let newCarts
    const productData = data?.[0]
    const dispatch = useDispatch()
    const [carts, setCarts] = useState([])
    const status = useSelector(state => state?.cart?.status)
    const state = useSelector(state => state?.cart?.carts?.products)
    useEffect(() => {
        setCarts(state)
    }, [status])
    console.log('cart', carts);
    console.log('onclick', productData)
    const handleClickPlus = () => {
      
        dispatch(addtoCart(
            productData.id
        ))
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