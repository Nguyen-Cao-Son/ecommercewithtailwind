import React, { useContext } from 'react'
import Product from './Product'
import { CatchDatas } from '../PushDatas'

const Products = () => {
  const dataProducts = useContext(CatchDatas)
  return (
    <div>
      <div className='w-full bg-slate-300  min-h-[1640px] '>
        <div className='w-full h-[160px] flex relative justify-items-center items-center '></div>
        <div className='block w-[80%] min-h-[1640px] mx-12 bg-slate-300 mt-5'>
          <div className='grid grid-cols-3 place-content-center place-items-center'>
            {dataProducts.map((value, index) =>
              <div className=''>
                <Product key={index} value={value} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products