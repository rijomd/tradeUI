import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "service/Request";
import { investmentsUrl } from "../config/Constants";
import { useAlert } from "components/hooks/Hook";

export const investmentsAction = createAsyncThunk(
    "home/investmentsAction",
    async (body, thunkAPI) => {
        try {
            const response = await axios.post(investmentsUrl, body);
            useAlert("success", "success");
            return response.data;
        } catch (error) {
            const errorMessage = error.response.data.message || "Something Wrong!";
            useAlert(errorMessage, "error");
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);