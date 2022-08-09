import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import FormRule from './FormRule'
import { isReQuired } from './rules'



const AddProduct = () => {
    useEffect(()=>{
        setState(10)
    },[])
    const form = useRef(null)
    const formGroup = useRef(null)
    const formMessage = useRef(null)
    const inputTittle = useRef()
    const inputDescription = useRef()
    const inputCataloge = useRef()
    const inputImage = useRef()
    const inputPrice = useRef()
    const btnSubmit = useRef(null)
    
    const [state,setState] = useState('')
    const [tittle, setTittle] = useState('')
    const [price, setPrice] = useState('')
    const [cataloge, setCataloge] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

  
    const handleOnchangeInputTittle = () => {
        setTittle(inputTittle?.current?.value)   
    }
    const handleOnchangeInputPrice = () => {
        setPrice(inputPrice?.current?.value)   
    }
    const handleOnchangeInputCataloge = () => {
        setCataloge(inputCataloge?.current?.value)   
    }
    const handleOnchangeInputDescription = () => {
        setDescription(inputDescription?.current?.value)   
    }
     const handleOnchangeInputImage = () => {
        setImage(inputImage?.current?.value)   
    }
    
    const elementForm = {
        form: form,
        formGroup: formGroup,
        error:'.form-message',
        submit: btnSubmit,
        rules: [
            isReQuired(inputTittle),
            isReQuired(inputPrice),
            isReQuired(inputDescription),
            isReQuired(inputCataloge),
            isReQuired(inputImage),
        ]
    }

    FormRule(elementForm)

    return (
        <>
            <div className='w-full h-[120px] block contents-none mr-0 '></div>
            <div className='mt-[10px] w-full h-[10px]'></div>
            <div className='my-[10px] flex justify-center items-center '>
                <div></div>
                <div id='form' className='rounded-sm  border-slate-100 shadow-lg shadow-black w-[80%] ' >

                    <form className='w-[100%] flex flex-col justify-items-center items-center form-1' ref={form} >

                        <div className='w-[100%] ml-[32px] form-group my-8  translate-x-[22%] justify-center items-center' ref={formGroup}>
                            <label className=' block text-1xl font-bold ' htmlFor="">Tittle : </label>
                            <input id='input_tittle' value={tittle} name='tittle' className='border-2 border-black/40 input-form h-[40px] mt-[5px] rounded-lg w-[50%] mb-[4px] ' ref={inputTittle} type="text" onChange={handleOnchangeInputTittle} />
                            <div className='form-message hidden' ref={formMessage}>
                                <p className='text-1xl text-red-400 '>
                                    <i>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                    </i>
                                    vui long nhap title </p>
                            </div>
                        </div>

                        <div className='w-[100%] ml-[32px] form-group mb-4  translate-x-[22%] justify-center items-center' ref={formGroup}>
                            <label className=' block text-1xl font-bold ' htmlFor="">Price : </label>
                            <input id='input_tittle' value={price} name='tittle' className='border-2 border-black/40 input-form h-[40px] mt-[5px] rounded-lg w-[50%] mb-[4px] ' ref={inputPrice} type="text" onChange={handleOnchangeInputPrice} />
                            <div className='form-message hidden' ref={formMessage}>
                                <p className='text-1xl text-red-400 '>
                                    <i>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                    </i>
                                    vui long nhap price </p>
                            </div>
                        </div>

                        <div className='w-[100%] ml-[32px] form-group mb-4  translate-x-[22%] justify-center items-center' ref={formGroup}>
                            <label className=' block text-1xl font-bold ' htmlFor="">Description : </label>
                            <input id='input_tittle' value={description} name='tittle' className='border-2 border-black/40 input-form h-[40px] mt-[5px] rounded-lg w-[50%] mb-[4px] ' ref={inputDescription} type="text" onChange={handleOnchangeInputDescription} />
                            <div className='form-message hidden' ref={formMessage}>
                                <p className='text-1xl text-red-400 '>
                                    <i>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                    </i>
                                    vui long nhap description </p>
                            </div>
                        </div>

                        <div className='w-[100%] ml-[32px] form-group mb-4  translate-x-[22%] justify-center items-center' ref={formGroup}>
                            <label className=' block text-1xl font-bold ' htmlFor="">Catologe : </label>
                            <input id='input_tittle' value={cataloge} name='tittle' className='border-2 border-black/40 input-form h-[40px] mt-[5px] rounded-lg w-[50%] mb-[4px] ' ref={inputCataloge} type="text" onChange={handleOnchangeInputCataloge} />
                            <div className='form-message hidden' ref={formMessage}>
                                <p className='text-1xl text-red-400 '>
                                    <i>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                    </i>
                                    vui long nhap cataloge </p>
                            </div>
                        </div>

                        <div className='w-[100%] ml-[32px] form-group mb-4  translate-x-[22%] justify-center items-center' ref={formGroup}>
                            <label className=' block text-1xl font-bold ' htmlFor="">URL Product : </label>
                            <input id='input_tittle' value={image} name='tittle' className='border-2 border-black/40 input-form h-[40px] mt-[5px] rounded-lg w-[50%] mb-[4px] ' ref={inputImage} type="text" onChange={handleOnchangeInputImage} />
                            <div className='form-message hidden' ref={formMessage}>
                                <p className='text-1xl text-red-400 '>
                                    <i>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                    </i>
                                    vui long nhap url image </p>
                            </div>
                        </div>
                  
                       
                    <div className='flex justify-center items-center w-[20%] translate-x-[70%] '>
                        <div className='w-[100%] rounded-lg border-black bg-black text-white flex justify-center items-center mb-4 hover:bg-cyan-300/50 hover:text-black ' ref={btnSubmit} >
                            <button type='submit' className='w-[80%] rounded-lg border-black '> add product for sell </button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddProduct