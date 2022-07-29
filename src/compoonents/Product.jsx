import React, { useContext } from 'react'
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


const Product = ({ value, index }) => {
  const trumcateString = (str, num) => {
    if (str?.length > num)
      return str.slice(0, num) + '...';
    else {
      return str;
    }
  }
  const handleOnclick = (value) => console.log(value);

  return (

    <div key={index} className='w-[160px] mb-4' onClick={handleOnclick
    }>
      <div className='px-[4px] py-5 rounded-lg  border-4 bg-white w-[350px] min-h-[400px] cursor-pointer hover:scale-90'>
        <div className='flex flex-col justify-items-center items-center'>
          <div className='w-[150px] h-[200px] mb-10'>
            <img classname='w-5 h-auto ' src={value?.image} alt={value?.title} />
          </div>
          <p className='font-bold text-2xl mb-8'>{trumcateString(value?.title, 16)}</p>
          <div className='flex flex-row space-x-10 font-bold text-2xl'>
            <p>{value?.price}$</p>
            <FontAwesomeIcon className='mt-1 cursor-pointer text-3xl hover:text-blue-400/70 '
              icon={faCartPlus} />
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Product