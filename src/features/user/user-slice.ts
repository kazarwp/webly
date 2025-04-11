import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserInfo, ILogin } from "../../utils/interface";

const initialState: IUserInfo = {
  type: 'user',
  email: '',
  auth: false,
  password: ''
}

export const userSlice = createSlice({
  name: '@user',
  initialState,
  reducers: {
    addUserInfo: (_, action: PayloadAction<ILogin>) => {
      const {email, password} = action.payload
      return {
        ...initialState,
        email,
        password,
        auth: true
      }
    },
    clearUserInfo: () => {
      return initialState
    }
  },
})

export const {addUserInfo, clearUserInfo} = userSlice.actions
export const userReduce = userSlice.reducer