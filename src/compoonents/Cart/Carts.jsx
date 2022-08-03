
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { getCarts } from './CartSlice';
import useGetCart from '../../api/hook/useGetCart';
import { useContext } from 'react';
import CartView from './CartView';
import { CatchDatas } from '../../PushDatas';
import { addtoCart } from './CartSlice';

const Carts = () => {
  const [quantity, setQuantity] = useState(0)
  const dispatch = useDispatch();
  const [carts, setCarts] = useState({})
  const datas = useGetCart()
  useEffect(() => {
    datas().then(res => setCarts(res))
    const data = dispatch(getCarts(carts))
  }, [])
  const productsData = useContext(CatchDatas)
  const cartData = carts.products
  const cart = cartData?.map((value, index) => {
    const products = 
      productsData?.filter((valueProducts) => {return valueProducts.id === value.productId})
    return {
      ...products 
      ,
      quantity: value?.quantity
    }
  })
  console.log(cart);
  //get qauntity of product from variavle cart ------------------------------------------
  useEffect(
    () => {
      if (cart) {
        setQuantity(cart?.map((value) => value?.quantity))
      }
    }
    , [])
  console.log('quantity :', quantity);
  const handleClickPlus = (value) =>{
    dispatch(addtoCart(value))
    setQuantity(quantity+1)
  }
  return (
    <div className='w-full min-h-[600px] bg-slate-400  flex justify-items-center items-center'>
      <div className='w-[80%] h-[80%] bg-slate-200 flex flex-row  '>
        {
          cart?.map(value => {
            return (
              <div key={value?.id} className='w-[30%] h-[400px]'>
                <div>
                  <CartView data={value} />
                </div>
                <div >
                  <button onClick={handleClickPlus(value)} className='text-3xl'>+</button>
                  <span>{value.quantity}</span>
                  <button>-</button>
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