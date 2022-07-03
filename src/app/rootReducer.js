import { combineReducers } from "@reduxjs/toolkit";

import { loginReducer } from "./../features/login/loginSlice";
import { productReducer } from "./../features/product/productSlice";

const rootReducer = combineReducers({
  signin: loginReducer,
  products: productReducer,
});

export default rootReducer;
