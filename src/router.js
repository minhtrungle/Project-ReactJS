import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import DetailPage from "./pages/detail/DetailProduct";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import ThankPage from "./pages/thank/ThankPage";
import UserPage from "./pages/user/UserPage";
import React from "react";
function Routing() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/thank' element={<ThankPage />} />
        <Route path='/my-profile' element={<UserPage />} />
        <Route path='/:product_id/:slug' element={<DetailPage />} />
      </Routes>
    </>
  );
}
export default Routing;
