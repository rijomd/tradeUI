import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "service/Request";
import { dashBoardUrl } from "../config/Constants";


export const dashBoardAction = createAsyncThunk(
  "authentication/dashBoardAction",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(dashBoardUrl, body);
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response.data.message || "Something Wrong!";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
