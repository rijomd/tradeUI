import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "service/Request";
import { getPaymentsUrl, addPaymentsUrl } from "../config/Constants";
import { urlParams, useAlert } from "components/hooks/Hook";

export const getPaymentsAction = createAsyncThunk(
    "home/getPaymentsAction",
    async (body, thunkAPI) => {
        let id = body?.id;
        const payload = { ...body };
        delete payload.id;
        try {
            const response = await axios.get(getPaymentsUrl + id + "?" + urlParams(payload));
            return response.data;
        } catch (error) {
            const errorMessage = error.response.data.message || "Something Wrong!";
            useAlert(errorMessage, "error");
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

export const addPaymentsAction = createAsyncThunk(
    "home/addPaymentsAction",
    async (body, thunkAPI) => {
        try {
            const response = await axios.post(addPaymentsUrl, body);
            return response.data;
        } catch (error) {
            const errorMessage = error.response.data.message || "Something Wrong!";
            useAlert(errorMessage, "error");
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);