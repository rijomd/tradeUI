import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "service/Request";
import {  loginUrl, signInUrl, successMessage } from "../config/Constants";
import { AUTH_USER, ACCESS_TOKEN } from "service/AuthConstants";
import { useAlert } from "components/hooks/Hook";


export const loginAction = createAsyncThunk(
  "authentication/loginAction",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(loginUrl, body);
      const token = response.data.data.token;
      const user = response.data.data.users;
      localStorage.setItem(AUTH_USER, JSON.stringify(user));
      localStorage.setItem(ACCESS_TOKEN, token);
      useAlert(response.data?.message || successMessage, "success");
      return response.data;
    } catch (error) {
      const errorMessage = error.response.data || "Something Wrong!";
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
