import React from 'react'
import useGetAllProducts from '../api/hook/useGetProduct'

const CartPage = () => {
    const dataCart = useGetAllProducts('carts')
    console.log(dataCart);
  return (
    <div>CartPage</div>
  )
}

export default CartPage