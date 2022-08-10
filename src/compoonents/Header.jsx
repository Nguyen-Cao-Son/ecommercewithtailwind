import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <>
            <div className='flex content-center w-full h-[120px] bg-gradient-to-t from-cyan-300 to-blue-700 justify-center items-center fixed z-[999] clear-both'>
                <div className='w-1/3'>
                    <ul className='flex mr-16  '>
                        <Link to='/Home'>
                            <li className='mx-4 font-bold text-blue-600 text-white cursor-pointer'>HOME PAGE</li>
                        </Link>
                        <li className='mx-4 font-bold text-blue-600 text-white cursor-pointer'>
                            PRODUCT
                          
                        </li>
                        {/* <li className='mx-4 font-bold text-blue-600 cursor-pointer'></li> */}
                        <li className='mx-4 font-bold text-blue-600 text-white cursor-pointer'>
                            {/* <Link to={/Footer}> CONTACT </Link> */}
                            CONTACT
                        </li>
                    </ul>
                </div>
                <div className=' block items-center font-bold text-blue-600 text-white text-5xl mr-7 '>
                    E-COMMERCE
                </div>
                <div className='w-1/3 flex justify-center items-center place-content-between text-2xl cursor-pointer '>
                    <i className='mx-10 text-blue-600 text-white' >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </i>
                    <i className='mx-10 text-blue-600 text-white'>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </i>
                    <i className='mx-10 text-blue-600 text-white'>
                        <FontAwesomeIcon icon={faUser} />
                    </i>
                </div>
            </div>
        </ >
    )
}

export default Header