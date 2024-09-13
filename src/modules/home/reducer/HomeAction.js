import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "service/Request";
import { contactUSUrl } from "../config/Constants";
import { useAlert } from "components/hooks/Hook";

export const contactUSAction = createAsyncThunk(
    "home/contactUSAction",
    async (body, thunkAPI) => {
        try {
            const response = await axios.post(contactUSUrl, body);
            useAlert("success", "success");
            return response.data;
        } catch (error) {
            const errorMessage = error.response.data.message || "Something Wrong!";
            useAlert(errorMessage, "error");
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);