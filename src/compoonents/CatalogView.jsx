import React, { useState, useContext, useEffect } from 'react'
import { CatchDatas } from '../PushDatas'

const CatalogView = () => {
    const datas = useContext(CatchDatas)
    useEffect(() => {
        const data = datas.find((value,) =>
            value.id === 1)
        if (data) {
            setProduct(data)
        }
    }
        , [datas])
    const [product, setProduct] = useState({})
    console.log(product);
    return (
        <div>
            <div className='w-full bg-slate-300  min-h-[500px] '>
                <div className='w-full h-[120px] flex relative justify-items-center items-center '></div>
                  <div className='flex flex-row justify-center items-center mt-10'>
                    <div className='w-[600px] h-auto mx-9 bg-white'>
                        <div className='w-[200px] h-auto'>
                        <img src={product.image} alt="" />
                        </div>
                        <div>
                            <p>Description:{product.description}</p>
                            </div>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

export default CatalogView