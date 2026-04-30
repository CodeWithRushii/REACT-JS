import { createSlice } from "@reduxjs/toolkit";

const themeslice= createSlice({
  name: "theme",
  initialState: {
    mode: "light",
  },
  reducers: {
    themeChanges: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});
export const { themeChanges } = themeslice.actions;
export default themeslice.reducer;