import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHeaderInput, BlockElements } from "../../utils/interface";

const initialState = {
  elements: [] as BlockElements[],
};

export const blocksSlice = createSlice({
  name: "@blocks",
  initialState,
  reducers: {
    createElement: (state, action: PayloadAction<IHeaderInput>) => {
      state.elements.push(action.payload);
    },
  },
});

export const { createElement } = blocksSlice.actions;
export const blocksReducer = blocksSlice.reducer;
