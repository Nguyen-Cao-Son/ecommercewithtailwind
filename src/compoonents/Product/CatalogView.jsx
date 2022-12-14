import React, { useState, useContext, useEffect } from 'react'
import { CatchDatas } from '../../PushDatas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from 'react-redux/es/exports'
import { addtoCart } from '../Cart/CartSlice'
import CartSlice from '../Cart/CartSlice'


const CatalogView = () => {
    const datas = useContext(CatchDatas)
    const dispatch = useDispatch();
    useEffect(() => {
        const data = datas.find((value) =>
            value.id === 6)
        if (data) {
            setProduct(data)
        }
    }
        , [datas])
    const [product, setProduct] = useState({})
    console.log('product:', product.id);
    const handleOnclickAddtoCart = () =>{
        // dispatch(
        //     CartSlice.actions.addToCart(product.id)
        // )
        dispatch(addtoCart(product))
    }
    return (
        <div>
            <div className='w-full bg-slate-300  min-h-[570px] '>
                <div className='w-full h-[120px] flex relative justify-items-center items-center '></div>
                <div className='flex flex-row justify-center items-center mt-6'>
                    <div className='w-[900px] h-[400px] mx-9 bg-white flex rounded-lg '>
                        <div className='w-[300px] h-auto ml-4 rounded-lg'>
                            <img className='w-full h-[80%]' src={product?.image} alt="" />
                        </div>

                        <div className='w-600px h-full ml-10 mt-7'>
                            <p className='font-bold text-2xl text-blue-400 mb-5'>{product?.title}</p>
                            <p className='font-sans text-1xl mb-10 w-[500px]'>Description:{product?.description}</p>
                            <div className='flex justify-center items-center place-content-between mb-7'>
                                <p className='font-bold text-3xl text-black mr-20'>Rating :{product?.rating?.rate}</p>
                                <p className='font-bold text-2xl text-black mr-20'>Count:{product?.rating?.count}</p>
                            </div>
                            <div>
                                <button  onClick={handleOnclickAddtoCart}    className='flex justify-items-center items-center w-[500px] h-10 border-4 rounded-lg bg-blue-800 justify-center hover:opacity-70'>
                                    <FontAwesomeIcon className='text-white' icon={faCartPlus} />
                                    <p className='text-white'  >ADD TO CART</p>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CatalogView