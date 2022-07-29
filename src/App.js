import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import {PushDatas} from "./PushDatas"
import Catalog from "./pages/Catalog"


function App() {
  //  const datas = useGetAllProducts('products')
  // 
 
  return(
    <PushDatas>
    <div className="App">
      <Home />
     {/* <Catalog /> */}
    </div>
    </PushDatas>

  )

}

export default App;
