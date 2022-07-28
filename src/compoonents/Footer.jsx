import React from 'react'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <>
    <div className='h-[170px] w-full flex justify-center items-center flex-col '>
        <div className='flex flex-row justify-center items-center mb-2'>
          <p className='font-sans text-4xl mr-5 '>Contact with me: </p>
          <a href="https://www.facebook.com/profile.php?id=100017588822463">
           <i className='text-4xl mr-5 hover:text-blue-400'>
            <FontAwesomeIcon  icon={faFacebook}/>
           </i>
          </a>
          <a href="https://www.instagram.com/ncs1180/">
           <i className='text-4xl hover:text-red-400 '>
            <FontAwesomeIcon  icon={faInstagram}/>
           </i>
          </a>
        </div>
        <div>
            <p className='font-sans text-2xl'>Address: 144/27 Man Thien Street, District 9, Thu Duc City</p>
            <p className='font-sans text-2xl'> Phone: (+84)78.568.7132 </p>
        </div>
    </div>



    </>
  )
}

export default Footer