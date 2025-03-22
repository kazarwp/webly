import { configureStore } from "@reduxjs/toolkit";
import { blocksReducer } from "./features/blocks/blocks-slice";

export const store = configureStore({
  reducer: {
    blocks: blocksReducer
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch