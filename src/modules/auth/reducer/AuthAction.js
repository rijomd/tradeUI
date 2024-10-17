import { createAsyncThunk } from "@reduxjs/toolkit";

import { loginUrl, signInUrl, successMessage } from "../config/Constants";

import axios from "service/Request";
import { AUTH_USER, ACCESS_TOKEN, ACCESS_ROUTES, ACCESS_SIDEBAR } from "service/AuthConstants";

import { matchItemOfTwoArray, useAlert } from "components/hooks/Hook";
import { PageRouter } from "routes/PageRouter";
import { MenuItems } from "routes/SideMenuItems";


export const loginAction = createAsyncThunk(
  "authentication/loginAction",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(loginUrl, data);
      const token = response.data.data.token;
      const user = response.data.data.users;
      const newRouters = matchItemOfTwoArray("name", "menuName", PageRouter, response.data.data.users?.userMenuMapping || []);
      const newSideBarMenus = matchItemOfTwoArray("name", "menuName", MenuItems, response.data.data.users?.userMenuMapping || []);

      localStorage.setItem(AUTH_USER, JSON.stringify(user));
      localStorage.setItem(ACCESS_TOKEN, token);
      localStorage.setItem(ACCESS_ROUTES, JSON.stringify(newRouters));
      localStorage.setItem(ACCESS_SIDEBAR, JSON.stringify(newSideBarMenus));

      return response.data.data;
    } catch (error) {
      console.error(error);

      const errorMessage = error.response?.data?.message || "Something Wrong!";
      useAlert(errorMessage, "error");
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);


export const sighInAction = createAsyncThunk(
  "authentication/sighInAction",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(signInUrl, body);
      if (response.statusText !== "OK") {
        throw new Error(`HTTP error! Status: ${response.status || "590"}`);
      }
      localStorage.setItem(AUTH_USER, JSON.stringify(response.user));
      localStorage.setItem(ACCESS_TOKEN, response.access_token);
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response.data.message || "Something Wrong!";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
