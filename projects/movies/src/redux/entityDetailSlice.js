import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const entityDetailsSlice = createSlice({
  name: "entityDetails",
  initialState: initialState,
  reducers: {
    setEntityData: (state, action) => {
      state = action.payload.results;
    },
  },
});

export const { setEntityData } = entityDetailsSlice.actions;

export default entityDetailsSlice.reducer;
