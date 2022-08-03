import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from '../compoonents/Header'
import Footer from '../compoonents/Footer'
import useGetCart from '../api/hook/useGetCart'
import { getCarts } from '../compoonents/Cart/CartSlice'
import Carts from '../compoonents/Cart/Carts'


const CartPage = () => {
              
  return (
    <div>
      <Header />
      <Carts />
      <Footer />
    </div>
  )
}

export default CartPage