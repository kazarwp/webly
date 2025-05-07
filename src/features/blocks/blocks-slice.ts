import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlockElements, ITextInput } from "../../utils/interface";
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

export const elementSelect = <T extends BlockElements>(
  state: RootState,
  type: string
): T | undefined =>
  state.blocks.elements.find((element): element is T => element.type === type);

export const contentSelect = (state: RootState): ITextInput[] | undefined =>
  state.blocks.elements.filter(
    (element): element is ITextInput => element.type === "text"
  );
