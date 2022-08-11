import React from 'react'
import './loadingStyle.scss'

const Loading = () => {
  return (
    <>
      <div className='w-full h-[120px] block contents-none mr-0'></div>
      <div className='flex justify-center items-center flex-col w-full h-[400px]'>
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

      </div>

    </>
  )
}

export default Loading