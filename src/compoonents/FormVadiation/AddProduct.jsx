import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import FormRule from './FormRule'
import { isReQuired } from './FormRule'


const AddProduct = () => {

    const formElement = document.querySelectorAll('[name]')
    const elementForm = {
        form: 'form-#1',
        formGroupSelector: '.form-group',
        error: '.form-massage',
        formElement : formElement,
        rules: [
        //    isReQuired("#input_tittle")
        ]
    }
    FormRule(elementForm)

    return (
        <>
            <div className='w-full h-[120px] block contents-none mr-0 '></div>
            <div className='mt-[10px] w-full h-[10px]'></div>
            <div className='my-[10px] flex justify-center items-center '>
                <div className='rounded-sm  border-slate-100 shadow-lg shadow-cyan-300/50 w-[80%]'>
                    <div className='w-[100%] flex flex-col justify-items-center items-center form-#1'>
                        <div className='w-[100%] ml-[32px] form-group my-8  translate-x-[22%] justify-center items-center'>
                            <label className=' block text-2xl font-bold ' htmlFor="">Tittle : </label>
                            <input id='input_tittle' name='tittle' className='border-2 border-black/40 input-form h-[40px] mt-[5px] rounded-lg w-[50%] mb-[4px] ' type="text" />
                            <div className='form-message'>
                                <p className='text-1xl text-red-400 hidden'>
                                    <i>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                    </i>
                                    vui long nhap truong nay </p>
                            </div>
                        </div>
                        <div className='w-[100%] ml-[32px] form-group mb-8  translate-x-[22%] justify-center items-center'>
                            <label className=' block text-2xl font-bold ' htmlFor="">Price : </label>
                            <input className='border-2 border-black/40 input-form  h-[40px] mt-[5px] rounded-lg w-[50%] mb-[4px]' name='price' type="text" />
                            <div className='form-message'>
                                <p className='text-1xl hidden text-red-400'>
                                    <i>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                    </i>
                                    vui long nhap truong nay </p>
                            </div>
                        </div>
                        <div className='w-[100%] ml-[32px] form-group mb-8  translate-x-[22%] justify-center items-center'>
                            <label className=' block text-2xl font-bold ' htmlFor="">Description : </label>
                            <input className='border-2 border-black/40 input-form h-[40px] mt-[5px] rounded-lg w-[50%] mb-[4px]' name='Des' type="text" />
                            <div className='form-message'>
                                <p className='text-1xl hidden text-red-400'>
                                    <i>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                    </i>
                                    vui long nhap truong nay </p>
                            </div>
                        </div>
                        <div className='w-[100%] ml-[32px] form-group mb-8  translate-x-[22%] justify-center items-center'>
                            <label className=' block text-2xl font-bold ' htmlFor="">Cataloge : </label>
                            <input className='border-2 border-black/40 input-form h-[40px] mt-[5px] rounded-lg w-[50%] mb-[4px]' name='Catalog' type="text" />
                            <div className='form-message'>
                                <p className='text-1xl hidden text-red-400'>
                                    <i>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                    </i>
                                    vui long nhap truong nay </p>
                            </div>
                        </div>
                        <div className='w-[100%] ml-[32px] form-group mb-8  translate-x-[22%] justify-center items-center'>
                            <label className=' block text-2xl font-bold ' htmlFor="">image : </label>
                            <input className='border-2 border-black/40 input-form h-[40px] mt-[5px] rounded-lg w-[50%] mb-[4px]' name='imge' type="text" />
                            <div className='form-message'>
                                <p className='text-1xl hidden text-red-400'>
                                    <i>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                    </i>
                                    vui long nhap truong nay </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center '>
                        <div className='w-[40%] rounded-lg border-black bg-black text-white flex justify-center items-center mb-4 hover:bg-cyan-300/50 hover:text-black ' >
                            <button className='w-[80%] rounded-lg border-black '> add product for sell </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct