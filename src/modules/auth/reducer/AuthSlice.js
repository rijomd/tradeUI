import { createSlice } from "@reduxjs/toolkit";

import { loginAction, sighInAction } from "./AuthAction";
import { errorMessage, successMessage } from "../config/Constants";

import { PageRouter } from "routes/PageRouter";
import { MenuItems } from "routes/SideMenuItems";
import { matchItemOfTwoArray } from "components/hooks/Hook";

const initialState = {
  auth: false,
  status: "idle",
  error: null,
  authComponents: [],
  authSideBarMenus: [],
  authToken: ""
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      state.auth = action.payload;
    },
    logOutAction: (state) => {
      state.auth = false;
      state.authComponents = [];
      state.authSideBarMenus = [];
      state.authToken = "";
    }
  },

  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      const newRouters = matchItemOfTwoArray("name", "menuName", PageRouter, action.payload?.users?.userMenuMapping || []);
      const newSideBarMenus = matchItemOfTwoArray("name", "menuName", MenuItems, action.payload?.users?.userMenuMapping || []);

      state.authComponents = newRouters;
      state.authSideBarMenus = newSideBarMenus;
      state.authToken = action.payload?.token;

      state.auth = true;
      state.status = "success";
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

export const { login, logOutAction } = authSlice.actions; //export actions
export default authSlice.reducer; //export reducer
