import React from 'react'
import useGetAllProducts from '../api/hook/useGetProduct'

const UserPage = () => {
const dataUsers = useGetAllProducts('users')
console.log(dataUsers);
  return (
    <div>UserPage</div>
  )
}

export default UserPage