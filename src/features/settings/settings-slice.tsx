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
}

export const settingsSlice = createSlice({
  name: "@settings",
  initialState,
  reducers: {
     handleHeaderPopup: (state, action: PayloadAction<boolean>) => {
      state.headerPopup = action.payload
     }
  }
})

export const { handleHeaderPopup } = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;