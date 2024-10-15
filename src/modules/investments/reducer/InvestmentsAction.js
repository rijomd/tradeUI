import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "service/Request";
import { investmentsUserDetailsUrl, investmentsUserUrl } from "../config/Constants";
import { useAlert } from "components/hooks/Hook";

// this for admin side
// export const investmentsUserAction = createAsyncThunk(
//     "investment/investmentsUserAction",
//     async (id, thunkAPI) => {
//         try {
//             const response = await axios.get(investmentsUserUrl + id);
//             return response.data;
//         } catch (error) {
//             const errorMessage = error.response.data.message || "Something Wrong!";
//             useAlert(errorMessage, "error");
//             return thunkAPI.rejectWithValue(errorMessage);
//         }
//     }
// );

export const investmentsUserDEtailsAction = createAsyncThunk(
    "investment/investmentsUserDEtailsAction",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(investmentsUserDetailsUrl + id);
            return response.data.data.data;
        } catch (error) {
            const errorMessage = error.response.data.message || "Something Wrong!";
            useAlert(errorMessage, "error");
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);