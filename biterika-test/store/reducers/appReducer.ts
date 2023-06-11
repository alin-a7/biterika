import { createSlice } from "@reduxjs/toolkit";
import { Campaign } from "../types";

interface InitialSatate {
  campaigns: Campaign[];
}

const initialSatate: InitialSatate = {
  campaigns: []
};

export const appSlice = createSlice({
  name: "app",
  initialState: initialSatate,
  reducers: {
  },
});

export const { } = appSlice.actions;
export default appSlice.reducer;
