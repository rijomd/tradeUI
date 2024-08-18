import { configureStore } from "@reduxjs/toolkit";

import Module from "modules/index";
import themeReducer from 'themes/actions/ThemeReducer';

// Adding reducers of each modules
let reducer = {};
for (const item in Module) {
  const reducers = Module[item].reducer;
  reducer = {
    ...reducer,
    [item]: reducers,
  };
}
if (Object.keys(reducer).length !== 0) {
  reducer = { ...reducer, theme: themeReducer };
}

export const store = configureStore({
  reducer: reducer
});
