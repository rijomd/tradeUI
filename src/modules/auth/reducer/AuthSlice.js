import { createSlice } from "@reduxjs/toolkit";

import { loginAction, sighInAction } from "./AuthAction";
import { errorMessage, successMessage } from "../config/Constants";


const initialState = {
  auth: false,
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      state.auth = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = true;
      state.error = successMessage;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload || errorMessage;
    });

    builder.addCase(sighInAction.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(sighInAction.fulfilled, (state, action) => {
      state.status = "success";
      state.error = successMessage;
    });
    builder.addCase(sighInAction.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload || errorMessage;
    });
  },
});

export const { login } = authSlice.actions; //export actions
export default authSlice.reducer; //export reducer
