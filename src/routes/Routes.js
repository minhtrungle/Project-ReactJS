import React from 'react'

import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";

const Routing = () => {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/catalog/:slug' component={Product}/>
        <Route path='/catalog' component={Catalog}/>
        <Route path='/cart' component={Cart}/>
      </Routes>
    
  );
}
export default Routing;