import React from 'react'
import Layout from "./Layout"
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import Cart from './Pages/cart/Cart'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path= "/" element={<Layout />}>
         <Route index element={<Home/>} />
         <Route path='/productDetails/:productId'  element={<ProductDetail/>} />
         <Route path='/cart'  element={<Cart/>} />
         </Route>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
