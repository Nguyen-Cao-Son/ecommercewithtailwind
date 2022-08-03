import React, { useEffect, useState } from 'react'


const CartView = ({data}) => {
   const productData = data?.[0]
    return (
        <div>
            <h3>{productData?.title}</h3>
            <img src={productData?.image} alt={productData?.title} />
           
        </div>
    )
}

export default CartView