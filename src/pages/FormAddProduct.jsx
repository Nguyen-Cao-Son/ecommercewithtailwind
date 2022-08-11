import React,{useEffect} from 'react'
import Header from '../compoonents/Header'
import Footer from '../compoonents/Footer'
import AddProduct from '../compoonents/FormVadiation/AddProduct'
import Loading from '../compoonents/LoadingComponent/Loading'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/exports'
import { getProduct } from '../compoonents/Product/ProductSlice'


const FormAddProduct = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct())
}, [])
  const status = useSelector(state => state.products.status)
  console.log(status)
  return (
    <>
      <Header />
      {
        status === 'done' ? <AddProduct /> : <Loading />
      }
      <Footer />
    </>


  )
}

export default FormAddProduct