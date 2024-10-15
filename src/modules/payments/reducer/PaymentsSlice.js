import { createSlice } from "@reduxjs/toolkit";
import { addPaymentsAction, getPaymentsAction } from "./PaymentsAction";
import { errorMessage, successMessage } from "../config/Constants";

const initialState = {
  status: "idle",
  paymentList: [],
  paymentDetails: {}
};

export const paymentsSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder.addCase(getPaymentsAction.fulfilled, (state, action) => {
      console.log(action.payload);

      state.status = "success";
      state.error = successMessage;
    });

    builder.addCase(addPaymentsAction.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addPaymentsAction.fulfilled, (state, action) => {
      state.status = "completed";
      state.error = successMessage || action.payload?.message;
    });
    builder.addCase(addPaymentsAction.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload || errorMessage;
    });

  },
});

export const { } = paymentsSlice.actions; //export actions
export default paymentsSlice.reducer; //export reducer
