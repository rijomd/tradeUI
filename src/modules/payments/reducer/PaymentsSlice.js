import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
};

export const paymentsSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
  },

  extraReducers: () => {
  },
});

export const { } = paymentsSlice.actions; //export actions
export default paymentsSlice.reducer; //export reducer
