import { createSlice } from "@reduxjs/toolkit";


const rootSlice = createSlice({
  name: "root",
  initialState: {
    loading: false,
    portfolioData: null,
  },
  reducers: {
    ShowLoading: (state, action) => {
      state.loading = true;
    },
    HideLoading: (state, action) => {
      state.loading = false;
    },
    SetPortfolioData: (state, action) => {
      state.portfolioData = {
        ...action.payload,
        certificates: action.payload.certificate,
        projects: action.payload.project,
      };
    },
  },
});

export default rootSlice.reducer;
export const { ShowLoading, HideLoading, SetPortfolioData } = rootSlice.actions;
