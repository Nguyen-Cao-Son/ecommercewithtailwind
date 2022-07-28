import { useEffect, useState } from 'react'
import axiosHelper from '../axiosHelper'

function useGetAllProducts(call) {
    const [state, setState] = useState([])
    useEffect(() => {
        const getData = async () => {
            let response = await axiosHelper.get(call)
            return response}
        getData()
        .then((res) => {
            setState(res.data)
            console.log('call')
        })},[])
    return state
}

export default useGetAllProducts