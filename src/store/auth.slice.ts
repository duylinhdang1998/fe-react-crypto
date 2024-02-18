import { UserInfo } from "~/models/user.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserInfo = {
  token: "",
  id: "123",
};

const authSlice = createSlice({
  name: "@auth",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{
        token: string;
        remember: boolean;
        admin: UserInfo;
      }>
    ) => {
      state.token = action.payload.token;
    },
    logout: (_state) => {
      return initialState;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
