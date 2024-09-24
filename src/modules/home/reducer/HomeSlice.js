import { createSlice } from "@reduxjs/toolkit";
import { contactUSAction } from "./HomeAction";
import { errorMessage } from "../config/Constants";

const initialState = {
  status: "idle",
  isDarkMode: false,
  error: ""
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    changeTheme: (state) => {
    }
  },

  extraReducers: (builder) => {
    builder.addCase(contactUSAction.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(contactUSAction.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(contactUSAction.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload || errorMessage;
    });
  },
});

export const { changeTheme } = homeSlice.actions; //export actions
export default homeSlice.reducer; //export reducer
