import { createSlice } from "@reduxjs/toolkit";

import { dashBoardAction } from "./DashBoardAction";
import { errorMessage, successMessage } from "../config/Constants";


const initialState = {
  status: "idle",
  error: null,
};

export const dashBoardSlice = createSlice({
  name: "dashBoard",
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder.addCase(dashBoardAction.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(dashBoardAction.fulfilled, (state, action) => {
      state.status = "success";
      state.error = successMessage;
    });
    builder.addCase(dashBoardAction.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload || errorMessage;
    });
  },
});

export const { login } = dashBoardSlice.actions; //export actions
export default dashBoardSlice.reducer; //export reducer
