import { createSlice } from "@reduxjs/toolkit";
import { investmentsUserAction, investmentsUserDEtailsAction } from "./InvestmentsAction";

const initialState = {
  status: "idle",
  investmentList: [],
  amountList: [],
  sectorList: [],
  stockList: [],
  investmentsDetails: [
    {
      amount: 0,
      name: "Total Investments",
      color: "#C200AB"
    },
    {
      amount: 0,
      name: "Current Value",
      color: "#118FA8"

    },
    {
      amount: 0,
      name: "Unrealized P & L",
      isProfitOrLose: "profit",
      color: "#047400"
    }
  ],
};

export const investmentSlice = createSlice({
  name: "investment",
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder.addCase(investmentsUserAction.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(investmentsUserAction.fulfilled, (state, action) => {
      state.status = "success";
      state.error = successMessage || action.payload?.message;
    });
    builder.addCase(investmentsUserAction.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload || errorMessage;
    });

    builder.addCase(investmentsUserDEtailsAction.fulfilled, (state, action) => {
      console.log(action.payload, "details");
      state.status = "success";
      state.investmentist = action.payload?.investmentList;
      state.amountList = action.payload?.amountList;
      state.sectorList = action.payload?.sectorList;
      state.stockList = action.payload?.stockList;
      state.investmentsDetails = state.investmentsDetails?.map((item, index) => {
        if (index === 0) {
          return { ...item, amount: action.payload?.totalInvestment };
        }
        else if (index === 1) {
          return { ...item, amount: action.payload?.currentValue };
        }
        else {
          return {
            ...item, amount: Number(action.payload?.pandL),
            isProfitOrLose: (action.payload?.totalInvestment < action.payload?.currentValue) ? "profit" : "loss"
          };
        }
      });

      state.error = successMessage || action.payload?.message;
    });
  },
});

export const { changeTheme } = investmentSlice.actions; //export actions
export default investmentSlice.reducer; //export reducer
