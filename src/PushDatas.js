import React, { createContext, useState, useEffect } from 'react'
import useGetAllProducts from './api/hook/useGetProduct'


//truyền dư liệu cho các component con không cần dùng porps 
const CatchDatas = createContext()
const PushDatas = ({ children }) => {
    const [products, setProducts] = useState([])
    let data
   const datas = useGetAllProducts()
   useEffect(() => {
        datas().then(res=>{
            setProducts(res)})
        },[data])
    // console.log(products)
    return (
        <CatchDatas.Provider value={products}>
            {children}
        </CatchDatas.Provider>
    )
}
export { PushDatas, CatchDatas }
