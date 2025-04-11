import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IHeaderInput,
  BlockElements,
  ICoverInput,
  ITitleInput,
  ITextInput,
  IFooterInput,
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

export const titleSelect = (state: RootState): ITitleInput | undefined =>
  state.blocks.elements.find(
    (element): element is ITitleInput => element.type === "title"
  );

export const contentSelect = (state: RootState): ITextInput[] | undefined =>
  state.blocks.elements.filter(
    (element): element is ITextInput => element.type === "text"
  );

export const footerSelect = (state: RootState): IFooterInput | undefined =>
  state.blocks.elements.find(
    (element): element is IFooterInput => element.type === "footer"
  );
