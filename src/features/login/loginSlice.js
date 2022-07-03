import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { auth } from "./../../services/authService.js";
import { getCurrentUser } from "./../../api/userAPI";

export const checkAuth = createAsyncThunk("signing/checkAuth", async () => {
  if (auth.isAuthenticated()) {
    const token = auth.getToken();
    const user = await getCurrentUser({ token });
    return { token, user };
  }

  return { token: null, user: null };
});

export const login = createAsyncThunk("signing/login", auth.login);

export const logout = createAsyncThunk("signing/logout", auth.logout);

const initialState = {
  loading: false,
  error: null,
  loggedIn: false,
  loggedInUser: null,
  token: null,
};

export const loginSlice = createSlice({
  name: "signing",
  initialState,
  reducers: {},
  extraReducers: {
    [checkAuth.pending]: startLoading,
    [checkAuth.fulfilled]: (state, { payload }) => {
      const { token = null, user = null } = payload;

      Object.assign(state, {
        loading: false,
        error: null,
        loggedIn: !!token,
        loggedInUser: user,
        token,
      });
    },
    [checkAuth.rejected]: receiveError,
    [login.pending]: startLoading,
    [login.fulfilled]: (state, { payload }) => {
      const { token, user } = payload;

      Object.assign(state, {
        loading: false,
        loggedIn: true,
        loggedInUser: user,
        token,
      });
    },
    [login.rejected]: receiveError,

    [logout.pending]: startLoading,
    [logout.fulfilled]: (state) =>
      Object.assign(state, {
        ...initialState,
        loading: false,
      }),
    [logout.rejected]: receiveError,
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

export const selectSignin = (state) => state.signin;

export const loginReducer = loginSlice.reducer;
