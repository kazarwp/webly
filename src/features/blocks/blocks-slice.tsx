import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHeaderInput } from "../../utils/interface";

const initialState = {
  elements: [],
};

export const blocksSlice = createSlice({
  name: "@blocks",
  initialState,
  reducers: {
    createHeader: (state, action: PayloadAction<IHeaderInput>) => {
      state.elements.push(action.payload);
    },
  },
});

export const { createHeader } = blocksSlice.actions;
export const blocksReducer = blocksSlice.reducer;
