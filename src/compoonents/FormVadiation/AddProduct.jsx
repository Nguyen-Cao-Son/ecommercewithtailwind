import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import FormRule from './FormRule'
import { isReQuired } from './rules'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/exports'
import { formValidateOnSubmit } from './fromValidate'
import {addtoFormProducts} from './FormProductSlice'


const AddProduct = () => {

    const productsData = useSelector(state => state?.products?.products)
    const status = useSelector(state => state?.products?.status)
    const form = useRef(null)
    const formGroup = useRef(null)
    const formMessage = useRef(null)
    const inputTittle = useRef()
    const inputDescription = useRef()
    const inputCataloge = useRef()
    const inputImage = useRef()
    const inputPrice = useRef()
    const btnSubmit = useRef(null)
    const [datas, setDatas] = useState('')
    const [products, setProducts] = useState('')
    const [tittle, setTittle] = useState('')
    const [price, setPrice] = useState('')
    const [cataloge, setCataloge] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const dispatch = useDispatch()
    const submitElement = btnSubmit.current



    const handleSubmit = (e) => {
        e.preventDefault();
        const invalid = formValidateOnSubmit(elementForm)
        console.log('invalid ', invalid)
        console.log(datas);
        if(invalid){
            dispatch(addtoFormProducts(datas))
        }
    }
     
    // const handleSubmit = useRef(
    //     (e) => {
    //         e.preventDefault();
    //         const invalid = formValidateOnSubmit(elementForm)
    //         console.log('invalid ', invalid)
    //         console.log(datas);
    //     }
    // )
  

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
        error: '.form-message',
        submit: btnSubmit,
        rules: [
            isReQuired(inputTittle),
            isReQuired(inputPrice),
            isReQuired(inputDescription),
            isReQuired(inputCataloge),
            isReQuired(inputImage),
        ]
    }

    function addProducts({ tittle, price, description, cataloge, image }) {
        return {
            tittle,
            price,
            description,
            cataloge,
            image,
            rating: {}
        }
    }

    useEffect(() => {
        setDatas(addProducts({ tittle, price, description, cataloge, image }))
        submitElement?.addEventListener('click', handleSubmit)
        return () => { //clean up function
            submitElement?.removeEventListener('click', handleSubmit)
        }
    }
        , [tittle,price,description,cataloge,image])
    FormRule(elementForm, datas)
    return (
        <>
            <div className='w-full h-[120px] block contents-none mr-0 '></div>
            <div className='my-[0px] flex justify-center items-center flex-col bg-ecomBg mb-[20px]  '>
                <div className=' w-full h-[15px] flex justify-center items-center '></div>
                <div id='form' className='rounded-max  border-2 border-white  w-[30%] bg-white/100 ' >
                    <div className='flex flex-col justify-items-center items-center mt-[15px]'>
                        <div className='text-4xl text-blue-600 font-extrabold content-center'>Form Add Product</div>
                    </div>

                    <form className='w-[100%] flex  flex-col justify-items-center items-center form-1' ref={form} >

                        <div className='w-[100%] ml-[32px] form-group my-4 mt-4  translate-x-[12%] justify-center items-center' ref={formGroup}>
                            <label className=' block text-1xl font-bold ' htmlFor="">Tittle : </label>
                            <input id='input_tittle' value={tittle} name='tittle' className='border-2 border-black/40 input-form h-[40px] mt-[5px] rounded-lg w-[70%] mb-[4px] ' ref={inputTittle} type="text" onChange={handleOnchangeInputTittle} />
                            <div className='form-message hidden' ref={formMessage}>
                                <p className='text-1xl text-red-400 '>
                                    <i>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                    </i>
                                    vui long nhap title </p>
                            </div>
                        </div>

                        <div className='w-[100%] ml-[32px] form-group mb-4  translate-x-[12%] justify-center items-center' ref={formGroup}>
                            <label className=' block text-1xl font-bold ' htmlFor="">Price : </label>
                            <input id='input_tittle' value={price} name='tittle' className='border-2 border-black/40 input-form h-[40px] mt-[5px] rounded-lg w-[70%] mb-[4px] ' ref={inputPrice} type="text" onChange={handleOnchangeInputPrice} />
                            <div className='form-message hidden' ref={formMessage}>
                                <p className='text-1xl text-red-400 '>
                                    <i>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                    </i>
                                    vui long nhap price </p>
                            </div>
                        </div>

                        <div className='w-[100%] ml-[32px] form-group mb-4  translate-x-[12%] justify-center items-center' ref={formGroup}>
                            <label className=' block text-1xl font-bold ' htmlFor="">Description : </label>
                            <input id='input_tittle' value={description} name='tittle' className='border-2 border-black/40 input-form h-[40px] mt-[5px] rounded-lg w-[70%] mb-[4px] ' ref={inputDescription} type="text" onChange={handleOnchangeInputDescription} />
                            <div className='form-message hidden' ref={formMessage}>
                                <p className='text-1xl text-red-400 '>
                                    <i>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                    </i>
                                    vui long nhap description </p>
                            </div>
                        </div>

                        <div className='w-[100%] ml-[32px] form-group mb-4  translate-x-[12%] justify-center items-center' ref={formGroup}>
                            <label className=' block text-1xl font-bold ' htmlFor="">Catologe : </label>
                            <input id='input_tittle' value={cataloge} name='tittle' className='border-2 border-black/40 input-form h-[40px] mt-[5px] rounded-lg w-[70%] mb-[4px] ' ref={inputCataloge} type="text" onChange={handleOnchangeInputCataloge} />
                            <div className='form-message hidden' ref={formMessage}>
                                <p className='text-1xl text-red-400 '>
                                    <i>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                    </i>
                                    vui long nhap cataloge </p>
                            </div>
                        </div>

                        <div className='w-[100%] ml-[32px] form-group mb-4  translate-x-[12%] justify-center items-center' ref={formGroup}>
                            <label className=' block text-1xl font-bold ' htmlFor="">URL Product : </label>
                            <input id='input_tittle' value={image} name='tittle' className='border-2 border-black/40 input-form h-[40px] mt-[5px] rounded-lg w-[70%] mb-[4px] ' ref={inputImage} type="text" onChange={handleOnchangeInputImage} />
                            <div className='form-message hidden' ref={formMessage}>
                                <p className='text-1xl text-red-400 '>
                                    <i>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                    </i>
                                    vui long nhap url image </p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center w-[40%]  translate-x-[70%]' ref={btnSubmit}  >
                            <div className='w-[100%] rounded-lg border-black bg-black text-white flex justify-center items-center mb-4 hover:bg-cyan-300/50 hover:text-black h-8 ' >
                                <button type='submit' className='w-[80%] rounded-lg border-black '> add product for sell </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className=' w-full h-[15px] flex justify-center items-center '></div>
            </div>
        </>
    )
}

export default AddProduct