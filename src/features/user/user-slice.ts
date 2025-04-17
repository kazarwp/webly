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

      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('auth', 'true');

      return {
        ...initialState,
        email,
        password,
        auth: true
      }
    },
    clearUserInfo: () => {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      localStorage.setItem('auth', 'false');

      return initialState
    }
  },
})

export const {addUserInfo, clearUserInfo} = userSlice.actions
export const userReduce = userSlice.reducer