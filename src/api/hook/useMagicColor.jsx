import React, { useEffect, useState } from 'react'

const useMagicColor = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    const [color,setColor] =  useState('bg-blue-600');
    useEffect(()=>{
        const intervalRef =  setInterval(()=>
        {
            const newColor = randomColor;
            setColor(`bg-${newColor}`)
        },2000);
        return () =>{
            clearInterval(intervalRef);
        }
    },[])
    console.log(color);
  return (
    color
  )
}

export default useMagicColor