import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "service/Request";
import { contactUSUrl } from "../config/Constants";


export const contactUSAction = createAsyncThunk(
    "home/contactUSAction",
    async (body, thunkAPI) => {
        try {
            const response = await axios.post(contactUSUrl, body);
            return response.data;
        } catch (error) {
            const errorMessage =
                error.response.data.message || "Something Wrong!";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);