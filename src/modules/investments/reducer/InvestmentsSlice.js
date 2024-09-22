import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  isDarkMode: false
};

export const investmentSlice = createSlice({
  name: "investment",
  initialState,
  reducers: {
    changeTheme: (state) => {
    }
  },

  extraReducers: () => {
  },
});

export const { changeTheme } = investmentSlice.actions; //export actions
export default investmentSlice.reducer; //export reducer
