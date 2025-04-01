import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IHeaderInput,
  BlockElements,
  ICoverInput,
} from "../../utils/interface";
import { RootState } from "../../store";

const initialState = {
  elements: [] as BlockElements[],
};

export const blocksSlice = createSlice({
  name: "@blocks",
  initialState,
  reducers: {
    createElement: (state, action: PayloadAction<BlockElements>) => {
      state.elements.push(action.payload);
    },
  },
});

export const { createElement } = blocksSlice.actions;
export const blocksReducer = blocksSlice.reducer;

// selectors
export const headerSelect = (state: RootState): IHeaderInput | undefined =>
  state.blocks.elements.find(
    (element): element is IHeaderInput => element.type === "header"
  );
  
export const coverSelect = (state: RootState): ICoverInput | undefined =>
  state.blocks.elements.find(
    (element): element is ICoverInput => element.type === "cover"
  );
