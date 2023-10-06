import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistanse-storage.js";
const initialState = {
  isLoading: false,
  isLogged: false,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signUserStart: (state, action) => {
      state.isLoading = true;
    },
    signUserSuccess: (state, action) => {
      state.isLoading = false;
      state.isLogged = true;
      state.user = action.payload;
      setItem("token", action.payload.token);
    },
    signUserFailure: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutUser: (state, action) => {
      state.isLogged = false;
    },
  },
});

export const { signUserFailure, signUserStart, signUserSuccess, logoutUser } =
  authSlice.actions;

export default authSlice.reducer;
