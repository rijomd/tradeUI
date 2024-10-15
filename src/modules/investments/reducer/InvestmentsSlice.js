import { createSlice } from "@reduxjs/toolkit";
import {  investmentsUserDEtailsAction } from "./InvestmentsAction";
import { errorMessage, successMessage } from "../config/Constants";

const initialInvestmentGraphData = [
  {
    name: "amountList",
    title: "Amount",
    labels: [],
    backgroundColor: ["#a39435"],
    data: [],
  },
  {
    name: "sectorList",
    title: "Sectors",
    labels: [],
    backgroundColor: ["#a39435"],
    data: [],
  },
  {
    name: "stockList",
    title: "Stocks",
    labels: [],
    backgroundColor: ["#a39435"],
    data: [],
  }
];

const backGroundColorCombinations = ["#A1008E", "#1AA6C2", "#047400", "rgb(101 76 207 / 72%)", "rgb(239 72 51)", "rgb(153 239 132)", "rgb(239 239 51)", "rgb(193 31 242)", "rgb(5 250 250)", "#a39435"];

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
      color: "#a39435"
    }
  ],
  backgroundColor: ["#A1008E", "#1AA6C2", "#047400"],
  investmentGraphData: []
};

export const investmentSlice = createSlice({
  name: "investment",
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder.addCase(investmentsUserDEtailsAction.fulfilled, (state, action) => {
      state.status = "success";
      state.investmentList = action.payload?.investmentist;

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
          const isProfit = action.payload?.totalInvestment < action.payload?.currentValue;
          return {
            ...item, amount: Number(action.payload?.pandL),
            isProfitOrLose: isProfit ? "profit" : "loss",
            color: isProfit ? "#047400" : "red",
          };
        }
      });

      const newData = {
        amountList: action.payload?.amountList,
        sectorList: action.payload?.sectorList,
        stockList: action.payload?.stockList,
      }
      state.investmentGraphData = initialInvestmentGraphData.map(item => {
        // Get corresponding array from newData if it exists
        const matchingData = newData[item?.name];
        if (matchingData) {
          return {
            ...item,
            data: matchingData?.length > 0 ? matchingData?.map(entry => entry?.amount) : [],
            labels: matchingData?.length > 0 ? matchingData?.map(entry => entry?.type) : [],
            backgroundColor: backGroundColorCombinations?.slice(0, matchingData?.length)
          };
        }
        return item;
      });

      state.error = successMessage || action.payload?.message;
    });
  },
});

export const { changeTheme } = investmentSlice.actions; //export actions
export default investmentSlice.reducer; //export reducer
