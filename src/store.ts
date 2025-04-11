import { configureStore } from "@reduxjs/toolkit";
import { blocksReducer } from "./features/blocks/blocks-slice";
import { settingsReducer } from "./features/settings/settings-slice";
import { userReduce } from "./features/user/user-slice";

export const store = configureStore({
  reducer: {
    blocks: blocksReducer,
    settings: settingsReducer,
    user: userReduce,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch