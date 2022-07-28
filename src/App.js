import { data } from "autoprefixer";
import React from "react";
import { Route, Routes } from "react-router-dom"
import useGetAllProducts from "./api/hook/useGetProduct";
import Home from "./pages/Home";
import {PushDatas,CatchDatas} from "./PushDatas"


function App() {
  //  const datas = useGetAllProducts('products')
  // 
 
  return(
    <PushDatas>
    <div className="App">
      <Home />
    </div>
    </PushDatas>

  )

}

export default App;
