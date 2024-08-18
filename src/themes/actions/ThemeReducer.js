import { createSlice } from "@reduxjs/toolkit";
import { ThemeConfig } from "../constants/ThemeConstants";
import { lightThemeColors, darkThemeColors } from 'themes/constants/ThemeColors';

const initialState = {
    isDarkMode: false,
    fontFamily: ThemeConfig.fontFamily,
    borderRadius: ThemeConfig.borderRadius,
    navType: 'dark',//light or dark
    themeColors: darkThemeColors
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.navType = action.payload;
            if (action.payload === "light") {
                state.themeColors = lightThemeColors;
            }
            else {
                state.themeColors = darkThemeColors;
            }
        },
        setFontFamily: (state, action) => {
            state.fontFamily = action.payload;
        },
    },

    extraReducers: () => {
    },
});

export const { changeTheme } = themeSlice.actions; //export actions
export default themeSlice.reducer; //export reducer
