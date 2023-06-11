import { createSlice } from "@reduxjs/toolkit";
import { Campaign } from "../types";

export type TabType = "all" | "1" | "2" | "3" | "4" | "5";
interface InitialSatate {
  activeTab: TabType;
}

const initialSatate: InitialSatate = {
  activeTab: "all",
};

export const appSlice = createSlice({
  name: "app",
  initialState: initialSatate,
  reducers: {
    setActiveTab(state, action: { payload: TabType }) {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = appSlice.actions;
export default appSlice.reducer;
