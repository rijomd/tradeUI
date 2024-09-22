import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "service/Request";
import { paymentsUrl } from "../config/Constants";
import { useAlert } from "components/hooks/Hook";

export const paymentsAction = createAsyncThunk(
    "home/paymentsAction",
    async (body, thunkAPI) => {
        try {
            const response = await axios.post(paymentsUrl, body);
            useAlert("success", "success");
            return response.data;
        } catch (error) {
            const errorMessage = error.response.data.message || "Something Wrong!";
            useAlert(errorMessage, "error");
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);