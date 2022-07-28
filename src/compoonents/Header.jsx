import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import useMagicColor from '../api/hook/useMagicColor'






const Header = () => {
    const color = useMagicColor();
    return (
        <div>
            <div className='flex content-center w-full h-[160px] bg-blue-600 justify-center items-center '>
                <div className='w-1/3'>
                    <ul className='flex mr-16  '>
                        <li className='mx-4 font-bold text-white cursor-pointer'>TRANG CHỦ</li>
                        <li className='mx-4 font-bold text-white cursor-pointer'>SẢN PHẨM</li>
                        <li className='mx-4 font-bold text-white cursor-pointer'>PHỤ KIỆN</li>
                        <li className='mx-4 font-bold text-white cursor-pointer'>LIÊN HỆ</li>
                    </ul>
                </div>
                <div className=' block items-center font-bold text-white text-5xl'>
                    E-COMMERCE
                </div>
                <div className='w-1/3 flex justify-center items-center place-content-between text-2xl cursor-pointer'>
                    <i className='mx-10 text-white' >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </i>
                    <i className='mx-10 text-white'>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </i>
                    <i className='mx-10 text-white'>
                        <FontAwesomeIcon icon={faUser} />
                    </i>

                </div>

            </div>
        </div >
    )
}

export default Header