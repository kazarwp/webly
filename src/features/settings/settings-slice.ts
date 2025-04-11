import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPopupSettings } from "../../utils/interface";

const initialState: IPopupSettings = {
  headerPopup: false,
  coverPopup: false,
  titlePopup: false,
  textPopup: false,
  imgPopup: false,
  buttonPopup: false,
  footerPopup: false,
};

export const settingsSlice = createSlice({
  name: "@settings",
  initialState,
  reducers: {
    openPopup: (state, action: PayloadAction<string>) => {
      const property = action.payload;
      if (property in state) {
        state[property as keyof typeof state] =
          !state[property as keyof typeof state];
      }
    },
  },
});

export const { openPopup } = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
