import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, data) => {
      state.token = data.payload;
    },
    logout: (state) => {
      state.token = "";
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
