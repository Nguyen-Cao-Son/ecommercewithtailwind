import React,{useContext} from 'react'
import {CatchDatas } from '../PushDatas'

export const Product = () => {
  const datas = useContext(CatchDatas)
  console.log(datas);
  return (
  <div>
   
  </div>
  )
}
