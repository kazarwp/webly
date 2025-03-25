import { configureStore } from "@reduxjs/toolkit";
import { blocksReducer } from "./features/blocks/blocks-slice";
import { settingsReducer } from "./features/settings/settings-slice";

export const store = configureStore({
  reducer: {
    blocks: blocksReducer,
    settings: settingsReducer
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch