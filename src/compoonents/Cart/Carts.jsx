
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { getCarts } from './CartSlice';
import useGetCart from '../../api/hook/useGetCart';
import { useContext } from 'react';
import CartView from './CartView';
import { CatchDatas } from '../../PushDatas';
import CartSlice, { getCartsFromApi } from './CartSlice';
import { useSelector } from 'react-redux';



const Carts = () => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(0)
  const [carts, setCarts] = useState([])
  const status = useSelector(state => state?.cart?.status)
  const state = useSelector(state => state?.cart?.carts)
  const productData = carts?.products
  useEffect(() => {
    dispatch(getCartsFromApi())
  }, [])

  useEffect(() => {
    setCarts(pre => pre = state)
    setQuantity(cart?.map((value) => value?.quantity))
    console.log('quantity', quantity)
  }, [state])


  const productsData = useContext(CatchDatas)
  const cart = productData?.map((value, index) => {
    const products =
      productsData?.filter((valueProducts) => { return valueProducts.id === value.productId })
    return {
      ...products,
      quantity: value?.quantity
    }
  })



  return (
    <div className='w-full min-h-[700px] bg-slate-400  flex justify-items-center items-center m-auto justify-center'>
      <div className='w-[80%] h-[400px] bg-slate-200 flex flex-row  '>
        {
          cart?.map(value => {
            return (
              <div key={value?.id} className='w-[30%] h-[400px]'>
                <div>
                  <CartView data={value} />
                </div>
                <div >
                </div>
              </div>
            )

          })

        }
      </div>
    </div>
  )
}

export default Carts