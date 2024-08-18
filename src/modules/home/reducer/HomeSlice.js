import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  isDarkMode: false
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    changeTheme: (state) => {
    }
  },

  extraReducers: () => {
  },
});

export const { changeTheme } = homeSlice.actions; //export actions
export default homeSlice.reducer; //export reducer
