import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { products } from "./../../services/productService";

export const getListProduct = createAsyncThunk(
  "product/getAll",
  products.productListService
);

const initialState = {
  loading: false,
  error: null,
  data: {},
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getListProduct.pending]: startLoading,
    [getListProduct.fulfilled]: (state, { payload }) => {
      const { data } = payload;
      Object.assign(state, {
        loading: false,
        data: data.data,
      });
    },
    [getListProduct.rejected]: receiveError,
  },
});
function startLoading(state) {
  Object.assign(state, {
    loading: true,
    error: null,
  });
}

function receiveError(state, action) {
  Object.assign(state, {
    loading: false,
    error: action.error,
  });
}

export const selectProduct = (state) => state.products;

export const productReducer = productSlice.reducer;
