import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import { PushDatas } from "./PushDatas"
import Catalog from "./pages/Catalog"
import CartPage from "./pages/CartPage";
import UserPage from "./pages/UserPage";
import useGetAllProducts from "./api/hook/useGetProduct";


function App() {
 

  return (
    <PushDatas>
      <div className="App">
        {/* <Home /> */}
        {/* <Catalog /> */}
        <CartPage />
        {/* <UserPage /> */}
      </div>
    </PushDatas>

  )

}

export default App;
