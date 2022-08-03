// import { useEffect, useState } from 'react'
// import { REACT_API } from 'process.env'
import axiosHelper from '../axiosHelper'

function useGetAllProducts() {
    const getAllProducts = async () => {
        let respone = await axiosHelper.get('products')
        return respone.data
    }
    console.log(getAllProducts());
    return getAllProducts 
}
export default useGetAllProducts