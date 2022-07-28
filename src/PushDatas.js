import React, { createContext } from 'react'
import useGetAllProducts from './api/hook/useGetProduct'


//truyền dư liệu cho các component con không cần dùng porps 
const CatchDatas = createContext() 
const PushDatas = ({children}) => {
    const datas = useGetAllProducts('products')
//    const datas =  'son'
    return (
        <CatchDatas.Provider value={datas}>
            {children}
        </CatchDatas.Provider>

    )
}
export { PushDatas, CatchDatas }
